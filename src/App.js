import React, { Component } from "react";
// import "./App.css";
import "./App.css";
import "./assets/js/rem";
import Head from "./component/views/head/head";
import { Carousel } from "antd";
class App extends Component {
  state = {
    news: []
  };
  blog = {
    listicon: true,
    toptext: "首页",
    clockicon: true,
    pointsicon: true
  };
  componentDidMount() {
    this.axios({
      url: "/news/latest",
      method: "get",
      params: {}
    }).then(res => {
      this.setState(
        {
          news: res.data.stories
        },
        () => {
          console.log(res.data)
          ;
        }
      );
    });
  }
  render() {
    return (
      <div className="App">
        <Head props={this.blog}></Head>
        <div className="container">
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
