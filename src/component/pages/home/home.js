import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./App.css";
import "./home.css";
import Head from "../../views/head/head";
import { Carousel } from "antd";
import Daynews from "../daynews/daynews";
class home extends Component {
  loading = false;
  startY = 0;
  endy = 0;
  state = {
    news: [],
    topnews: [],
    day: "",
    titles: [],
    headinfo: {
      listicon: true,
      toptext: "首页",
      clockicon: true,
      pointsicon: true
    }
  };

  componentDidMount() {
    this.axios({
      url: "/news/latest",
      method: "get"
    }).then(res => {
      var arr = res.data.stories;
      this.state.news.push(arr);
      this.state.titles.push("今日热闻");
      this.setState(
        {
          news: this.state.news,
          topnews: res.data.top_stories,
          day: res.data.date
        },
        () => {
          localStorage.setItem("titles", JSON.stringify(this.state.titles));
        }
      );
    });
  }
  start(e) {
    // console.log(e);
    this.startY = e.touches[0].clientY;
    this.endY = 0;
  }
  move(e) {
    this.endY = e.touches[0].clientY;
  }
  newsdetail(id) {
    if (this.endY === 0) {
      this.props.history.push("/detail?id=" + id);
      return;
    }
  }
  loadmore(e) {
    var screenhigh = this.$(window).height();
    var scrollhigh = this.$(window).scrollTop();
    var bodyhigh = this.$(document).height();
    var alltitle = document.querySelectorAll(".title");
    alltitle = Array.prototype.slice.call(alltitle, 0);
    var titletext = "首页";
    var alltitlehigh = alltitle.map(item => {
      return item.offsetTop - item.clientHeight;
    });
    for (var i = 0; i < alltitlehigh.length; i++) {
      if (scrollhigh > alltitlehigh[i]) {
        titletext = alltitle[i].innerHTML;
        continue;
      } else {
        break;
      }
    }
    var headinfo=this.state.headinfo;
    headinfo.toptext = titletext;
    this.setState({
      headinfo: headinfo
    });
    if (this.loading === false && scrollhigh + screenhigh >= bodyhigh) {
      this.loading = true;
      // console.log("kaishiqingqiu");
      this.axios({
        url: "/news/before/" + this.state.day,
        method: "get"
      }).then(res => {
        var arr = res.data.stories;
        var title = res.data.date;
        this.state.news.push(arr);
        this.state.titles.push(title);
        localStorage.setItem("titles", JSON.stringify(this.state.titles));
        this.setState(
          {
            news: this.state.news,
            day: res.data.date,
            titles: this.state.titles
          },
          () => {
            this.loading = false;
          }
        );
      });
    }
  }
  render() {
    return (
      <div className="homepage" onTouchMove={e => this.loadmore(e)}>
        <Head props={this.state.headinfo}></Head>
        <div className="container">
          <Carousel autoplay>
            {this.state.topnews.map(item => {
              return (
                <div
                  key={item.id}
                  onTouchEnd={e => this.newsdetail(item.id)}
                  onTouchStart={e => this.start(e)}
                  onTouchMove={e => this.move(e)}
                >
                  <img src={item.image} alt="" />
                  <div className="cover">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {this.state.news.map((item, index) => {
          return (
            <Daynews
              onEnd={e => this.newsdetail(e)}
              onStart={e => this.start(e)}
              onMove={e => this.move(e)}
              daynews={item}
              titleindex={index}
              key={item[0].title}
            ></Daynews>
          );
        })}
      </div>
    );
  }
}

export default withRouter(home);
