import React, { Component } from "react";
import "./assets/js/rem";
import Router from "./router"; //引入index.js
import routes from "./router/app";
class Event extends Component {
  render() {
    return (
        <Router routes={routes}></Router>//父传子
    );
  }
}
export default Event;
