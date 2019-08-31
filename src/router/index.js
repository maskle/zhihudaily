import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

class Event extends Component {
  render() {
    var routes = this.props.routes;
    // console.log(routes);
    return (
      <Switch>
        {routes.map(item => {
          if (item.path === "*") {
            return <Redirect key={item.path} to={item.redirect}></Redirect>;
          } else {
            return (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
              ></Route>
            );
          }
        })}
      </Switch>
    );
  }
}
export default Event;
