import React, { Component } from "react";
// import querystring from "querystring";
import "./head.css";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";
import Leftpage from "../../pages/leftpage/leftpage";
import Share from "../../pages/share/share";
class head extends Component {
  state = {
    params: {},
    isappear: false,
    shareing: false
  };
  goback() {
    this.props.history.go(-1);
  }
  listappear() {
    this.setState({
      isappear: true
    });
  }
  disappear() {
    this.setState({
      isappear: false
    });
  }
  tocomment(id) {
    localStorage.setItem("commentsnum", this.props.props.commentnum);
    this.props.history.push("/comments/" + id);
  }
  startshare() {
    this.setState({
      shareing: true
    });
  }
  hideshare(){
    this.setState({
      shareing: false
    });
  }
  tonotice(){
    this.props.history.push("/notice")
  }
  render() {
    return (
      <div className="header">
        {this.props.props.listicon ? (
          <Icon
            type="menu"
            className="listicon"
            onTouchEnd={() => this.listappear()}
          />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.backicon ? (
          <Icon
            type="arrow-left"
            className="listicon"
            onTouchEnd={() => this.goback()}
          />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.toptext ? (
          <h2 className="toptext">{this.props.props.toptext}</h2>
        ) : (
          <h2 className="none">123</h2>
        )}
        {this.props.props.clockicon ? (
          <Icon type="bell" className="clockicon" onTouchEnd={()=>this.tonotice()} />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.pointsicon ? (
          <Icon type="more" className="moreicon" />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.shareicon ? (
          <Icon
            type="share-alt"
            className="shareicon"
            onTouchEnd={() => this.startshare()}
          />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.collecticon ? (
          <Icon
            type="star"
            theme="filled"
            className={
              this.props.props.iscollect ? "collecticon1" : "collecticon"
            }
            onTouchEnd={() => this.props.oncollect()}
          />
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.commentnum !== undefined ? (
          <div
            className="commentnum"
            onTouchEnd={() => this.tocomment(this.props.props.id)}
          >
            <Icon type="message" className="messageicon" />
            <span>{this.props.props.commentnum}</span>
          </div>
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.agreenum !== undefined ? (
          <div className="agreenum">
            <Icon type="like" className="likeicon" />
            <span>{this.props.props.agreenum}</span>
          </div>
        ) : (
          <div className="none"></div>
        )}
        {this.props.props.formicon ? (
          <Icon type="form" className="formicon" />
        ) : (
          <div className="none"></div>
        )}
        <Leftpage
          isappear={this.state.isappear}
          onHide={() => {
            this.disappear();
          }}
        ></Leftpage>
        {this.state.shareing ? (
          <Share offshare={() => this.hideshare()}></Share>
        ) : null}
      </div>
    );
  }
}
export default withRouter(head);
