import React, { Component } from "react";
import querystring from "querystring";
import Head from "../../views/head/head";
import "./detail.css";
class detail extends Component {
  state = {
    detailinfo: {},
    headinfo: {
      id: "",
      backicon: true,
      shareicon: true,
      collecticon: true,
      commentnum: "",
      agreenum: "",
      iscollect:false
    }
  };
  collectinfo={}
  componentDidMount() {
    var params = querystring.parse(this.props.location.search.slice(1));
    this.axios({
      url: "/news/" + params.id,
      method: "get",
      params: {}
    }).then(res => {
      this.collectinfo.id=res.data.id;
      this.collectinfo.images=res.data.images;
      this.collectinfo.title=res.data.title;
      var arr=localStorage.getItem("collectinfo")?JSON.parse(localStorage.getItem("collectinfo")):[];
      var iscollect=arr.some(item=>item.id===this.collectinfo.id)
      var headinfo=this.state.headinfo;
      headinfo.iscollect=iscollect;
      this.setState(
        {
          headinfo,
          detailinfo: res.data
        },
        () => {
          this.refs.con.innerHTML = this.state.detailinfo.body;
          console.log(this.state.headinfo.iscollect)
        }
      );
    });
    this.axios({
      url: "/story-extra/" + params.id,
      method: "get",
      params: {}
    }).then(res => {
      // console.log(res);
      localStorage.setItem("longnum",res.data.long_comments)
      localStorage.setItem("shortnum",res.data.short_comments)
      var obj = this.state.headinfo;
      obj.commentnum = res.data.comments;
      obj.agreenum = res.data.popularity;
      obj.id = params.id;
      // console.log(obj)
      this.setState({
        headinfo: obj
      });
    });
  }
  tocollect(){
    var arr=localStorage.getItem("collectinfo")?JSON.parse(localStorage.getItem("collectinfo")):[];
    if(this.state.headinfo.iscollect){
      arr.forEach((item,index,arr)=>{
        if(item.id===this.collectinfo.id){
          console.log("111")
          console.log(arr)
          arr.splice(index,1);
          // break;
        }
      })
      console.log(arr)
      localStorage.setItem("collectinfo",JSON.stringify(arr))
      var headinfo=this.state.headinfo;
      headinfo.iscollect=false;
      this.setState({
        headinfo
      })
    }
    else{
      arr.push(this.collectinfo)
      localStorage.setItem("collectinfo",JSON.stringify(arr));
      var headinfo=this.state.headinfo;
      headinfo.iscollect=true;
      this.setState({
        headinfo
      })
    }
  }
  render() {
    return (
      <div className="detailpage">
        <Head props={this.state.headinfo} collectinfo={this.state.collectinfo} oncollect={()=>this.tocollect()}></Head>
        <div className="toppic">
          <img src={this.state.detailinfo.image} alt="" />
          <div className="cover">
            <h2 className="detailtitle">{this.state.detailinfo.title}</h2>
            <h4 className="imagesource">
              {this.state.detailinfo.image_source}
            </h4>
          </div>
        </div>
        <link rel="stylesheet" href={this.state.detailinfo.css} />
        <div ref="con"></div>
      </div>
    );
  }
}
export default detail;
