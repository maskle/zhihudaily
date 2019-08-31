import React, { Component } from "react";
import "./leftpage.css";
import imgpic from "../../../assets/images/headpic.jpg";
import { Icon } from "antd";
// import {Link} from "react-router-dom"
import { withRouter } from "react-router-dom";
class leftpage extends Component {
  state = {
    leftdis0: {
      left: 0
    },
    opacity:{
      background:"rgba(0,0,0,0.2)"
    },
    leftdis1: {
      left: "-100vw"
    },
    opacity1:{
      opacity:"rgba(0,0,0,0)"
    },
    leftstyle: {}
  };
  disappear() {
    this.props.onHide();
  }
  tohome() {
    this.props.history.push("/home");
    this.props.history.go(0);
  }
  tocollect(){
    this.props.history.push("/collect")
  }
  render() {
    return (
      <div
        className="leftpage"
        style={this.props.isappear ? this.state.leftdis0 : this.state.leftdis1}
      >
        <div className="left">
          <div className="lefthead">
            <div className="left_head clearfix">
              <div className="headtitle">
                <img src={imgpic} alt="" />
              </div>
              <h2 className="username">中公吴彦祖</h2>
            </div>
            <div className="doublebtn">
              <div className="leftbtn" onTouchEnd={()=>this.tocollect()}>
                <Icon type="star" theme="filled" className="icon" />
                <span>我的收藏</span>
              </div>
              <div className="rightbtn">
                <Icon type="download" className="icon" />
                <span>离线下载</span>
              </div>
            </div>
          </div>
          <div className="tohome" onTouchEnd={() => this.tohome()}>
            <Icon type="home" className="tohomeicon" theme="filled" />
            <span>首页</span>
          </div>
        </div>
        <div
          className="right"
          style={
            this.props.isappear ? this.state.opacity : this.state.opacity1
          }
          onTouchEnd={() => this.disappear()}
        ></div>
      </div>
    );
  }
}
export default withRouter(leftpage);
