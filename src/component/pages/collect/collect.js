import React, { Component } from "react";
import Head from "../../views/head/head";
import Newsmodel from "../../views/newsmodel/newsmodel";
import "./collect.css";
class collect extends Component {
  state = {
    headinfo: {
      listicon: true,
      toptext: ""
    },
    news: []
  };
  componentDidMount() {
    var arr = localStorage.getItem("collectinfo")
      ? JSON.parse(localStorage.getItem("collectinfo"))
      : [];
    var headinfo = this.state.headinfo;
    headinfo.toptext = arr.length + "条收藏";
    this.setState({
      headinfo,
      news: arr
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
  render() {
    return (
      <div className="collectpage">
        <Head props={this.state.headinfo}></Head>
        <div className="content">
          {this.state.news.map(item => {
            return (
              <Newsmodel
                onEnd={e => this.newsdetail(e)}
                onStart={e => this.start(e)}
                onMove={e => this.move(e)}
                key={item.id}
                newsinfo={item}
              ></Newsmodel>
            );
          })}
        </div>
      </div>
    );
  }
}
export default collect;
