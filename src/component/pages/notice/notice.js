import React, { Component } from "react";
import Head from "../../views/head/head";
import "./notice.css";
import { Icon } from "antd";
class notice extends Component {
  state = {
    headinfo: {
      listicon: true,
      toptext: "消息"
    }
  };
  render() {
    return (
      <div>
        <Head props={this.state.headinfo}></Head>
        <div className="notice_content">
            <Icon type="bell" className="this_clockicon" />
            <p className="nonotice">哟，还没有新消息哦~</p>
        </div>
      </div>
    );
  }
}
export default notice;
