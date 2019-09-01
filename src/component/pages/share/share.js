import React, { Component } from "react";
import "./share.css";
import weixin from "../../../assets/images/微信.jpg"
import xinlang from "../../../assets/images/新浪.jpg"
import weixinfriend from "../../../assets/images/微信朋友圈.jpg"
import yinxiang from "../../../assets/images/印象笔记.jpg"
import youdaoyun from "../../../assets/images/有道云.jpg"
import QQ from "../../../assets/images/QQ.jpg"
import more from "../../../assets/images/more.jpg"
class share extends Component {
    onshare(e){
        e.stopPropagation();
    }
  render() {
    return (
      <div className="share_cover" onTouchEnd={()=>this.props.offshare()}>
        <div className="message_box" onTouchEnd={(e)=>this.onshare(e)}>
          <h2 className="share_title">分享</h2>
          <ul className="share_list">
              <li>
                  <img src={xinlang} alt=""/>
                  <p>新浪微博</p>
              </li>
              <li><img src={weixin} alt=""/><p>新浪微博</p></li>
              <li><img src={weixinfriend} alt=""/><p>微信</p></li>
              <li><img src={yinxiang} alt=""/><p>微信朋友圈</p></li>
              <li><img src={youdaoyun} alt=""/><p>有道云笔记</p></li>
              <li><img src={QQ} alt=""/><p>QQ</p></li>
              <li><img src={more} alt=""/><p>更多平台</p></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default share;
