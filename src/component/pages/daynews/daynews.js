import React, { Component } from "react";
import Newsmodel from "../../views/newsmodel/newsmodel"
class daynews extends Component {
    state={
        news:[],
        title:"",
    }
    componentDidMount(){
        var news=this.props.daynews;  
        var titlenumber=this.props.titleindex;
        var titles=JSON.parse(localStorage.getItem("titles"))
        var getday=""
        if(titlenumber!==0){
          var titlearr=titles[titlenumber].split("");
          var titlearr1=titles[titlenumber].split("");
          titlearr1.splice(6,0,"月");
          titlearr1.splice(9,0,"日");
          var timestr1=titlearr1.join("");
          var daynum1=timestr1.slice(4)
          titlearr.splice(4,0,"/");
          titlearr.splice(7,0,"/");
          var timestr=titlearr.join("");
          var date=new Date(timestr);
          var day=date.getDay();
          var dayarr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
          var daynum2=dayarr[day];
          getday=daynum1+"  "+daynum2;
        }
        else{
          getday=titles[titlenumber];
        }
        this.setState({
            news:news,
            title:getday
        }) 
    }
  render() {
    return (
      <div className="news">
        <h2 className="title">{this.state.title}</h2>
        {this.state.news.map(item => {
          return <Newsmodel
          onEnd={e => this.props.onEnd(e)}
          onStart={e => this.props.onStart(e)}
          onMove={e => this.props.onMove(e)}
          key={item.id} newsinfo={item}></Newsmodel>;
        })}
      </div>
    );
  }
}
export default daynews;
