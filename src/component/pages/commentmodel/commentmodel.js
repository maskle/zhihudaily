import React, { Component } from "react";
import "./commentmodel.css";
import { Icon } from "antd";
import moment from "moment"
class commentmodel extends Component {
  state = {
    time: ""
  };
  componentDidMount() {
    // var date = new Date(this.props.cominfo.time);
    // moment().format('MM-DD, h:mm')
    var t1=moment(this.props.cominfo.time).format('MM-DD HH:mm');
    this.setState({
        time:t1
    })
  }
  render() {
    return (
      <div className="commentmodel clearfix">
        <div className="headphoto">
          <img src={this.props.cominfo.avatar} alt="" />
        </div>
        <div className="maincom">
          <div className="mainhead">
            <h2 className="user_name">{this.props.cominfo.author}</h2>
            <p className="like">
              {" "}
              <Icon type="like" />
              <span>{this.props.cominfo.likes}</span>
            </p>
          </div>
          <p className="comment_content">{this.props.cominfo.content}</p>
          <p className="time">{this.state.time}</p>
        </div>
      </div>
    );
  }
}
export default commentmodel;
