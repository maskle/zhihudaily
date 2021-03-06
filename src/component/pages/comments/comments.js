import React, { Component } from "react";
import Head from "../../views/head/head";
import "./comments.css";
import sofa from "../../../assets/images/sofa.jpg";
import { Icon } from "antd";
import Commentmodel from "../commentmodel/commentmodel";
class comments extends Component {
  totop={
    // transform:""
  }
  tobottom={
    // marginTop:0
  }
  state = {
    headinfo: {
      backicon: true,
      toptext: "",
      formicon: true
    },
    longcom: [],
    shortcom: [],
    ismount: false,
    isappear: false
  };
  appearclass = {
    display: "none"
  };
  componentDidMount() {
    this.ismount = false;
    var id = this.props.match.params.id;
    var commentnum = localStorage.getItem("commentsnum");
    var headinfo = this.state.headinfo;
    headinfo.toptext = commentnum + "条点评";
    this.setState({
      headinfo: headinfo
    });
    this.axios({
      url: "/story/" + id + "/long-comments",
      method: "get"
    }).then(res => {
      this.setState({
        longcom: res.data.comments
      });
    });
  }
  getshort() {
    var id = this.props.match.params.id;
    var short_site=document.getElementsByClassName("short")[0];
    // var scrolltop=document.documentElement.scrollTop;
    var short_top=-short_site.offsetTop/100;
    console.log(short_top);
    this.totop={transform:"translateY("+short_top+"rem)"}
    // this.totop.transform="translateY("+short_top+"rem)"
    if (this.state.ismount === false) {

      this.axios({
        url: "/story/" + id + "/short-comments",
        method: "get"
      }).then(res => {
        console.log(res.data.comments);
        this.setState(
          {
            shortcom: res.data.comments
          },
          () => {
            this.setState({
              ismount: true
            });
            this.setState(
              {
                isappear: true
              }
            );
          }
        );
      });
      
    } else {
      this.setState({
        isappear: !this.state.isappear
      });
    }
  }
  render() {
    return (
      <div className="totalpage">
        <Head props={this.state.headinfo}></Head>
        <div id="comment_page" style={this.state.isappear?this.totop:this.tobottom}>
          <div className="long">
            <h2 className="long_tit">{this.state.longcom.length}条长评</h2>
            {this.state.longcom.length === 0 ? (
              <div className="nolong">
                <img src={sofa} alt="" />
              </div>
            ) : (
              <div>
                <div className="short_con">
                  {this.state.longcom.map(item => {
                    return (
                      <Commentmodel cominfo={item} key={item.id}></Commentmodel>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="short">
            <div className="short_tit">
              <h2>{localStorage.getItem("shortnum")}条短评</h2>
              <Icon
                type={this.state.isappear ? "up" : "down"}
                className="downicon"
                onTouchEnd={() => this.getshort()}
              />
            </div>
            <div
              className="short_con"
              style={this.state.isappear ? null : this.appearclass}
            >
              {this.state.shortcom.map(item => {
                return (
                  <Commentmodel cominfo={item} key={item.id}></Commentmodel>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default comments;
