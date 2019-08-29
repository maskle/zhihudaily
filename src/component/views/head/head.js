import React, { Component } from "react";
// import querystring from "querystring";
import "./head.css"
import {Icon} from "antd"
class daiding extends Component {
  state = {
    params: {}
  };
 
  render() {
    return (
    <div className="header">
        {this.props.props.listicon? <Icon type="menu" className="listicon" />:<div className="none"></div>}
        {this.props.props.toptext?<h2 className="toptext">{this.props.props.toptext}</h2>:<h2 className="none"></h2>}
        {this.props.props.clockicon?<Icon type="bell" className="clockicon" />:<div class="none"></div>}
        {this.props.props.pointsicon?<Icon type="more" className="moreicon" />:<div class="none"></div>
        }
    </div>
    )

  }
}
export default daiding;
