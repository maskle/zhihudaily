import React, { Component } from "react";
import "./newsmodel.css";
import { withRouter } from "react-router-dom";
class detail extends Component {
  state = {
    newsinfo: {}
  };
  componentDidMount() {
    var obj = this.props.newsinfo;
    obj.images = obj.images[0];
    // console.log(obj)
    this.setState({
      newsinfo: obj
    });
  }
  render() {
    return (
      <div
        className="newsmodel"
        onTouchEnd={e => this.props.onEnd(this.props.newsinfo.id)}
        onTouchStart={e => this.props.onStart(e)}
        onTouchMove={e => this.props.onMove(e)}
      >
        <h2 className="lefttxt">{this.state.newsinfo.title}</h2>
        <img src={this.state.newsinfo.images} alt="" />
      </div>
    );
  }
}
export default withRouter(detail);
