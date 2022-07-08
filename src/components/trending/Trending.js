import React, { Component } from 'react'
import Card from './Card';
import './Trending.css'
export default class Trending extends Component {
    constructor(props){
        super(props)
        this.state = {
          trendingList:[]
        }
        this.trendRef = React.createRef()
        this.scrollHandlerX = this.scrollHandlerX.bind(this)
        this.scrollHandlerXminus = this.scrollHandlerXminus.bind(this)
    }
    scrollHandlerX(){
      this.trendRef.current.scrollLeft += this.trendRef.current.offsetWidth 
      console.log(this.trendRef.current.scrollLeft);
      console.log(`round ${Math.round(this.trendRef.current.offsetWidth)} `);
    } 
    scrollHandlerXminus(){
      this.trendRef.current.scrollLeft =this.trendRef.current.scrollLeft  - this.trendRef.current.offsetWidth
    }
    async componentDidMount(){
      const res = await fetch(`https://tenor.googleapis.com/v2/trending_terms?key=AIzaSyAjXzBBUEAAsEcCdGknxO6YhNirgh92m9A&client_key=animation`)
      const JsonData = await res.json()
      console.log(JsonData.results.length);
      JsonData.results.map((data)=>{
          fetch(`https://tenor.googleapis.com/v2/search?q=${data}&key=AIzaSyAjXzBBUEAAsEcCdGknxO6YhNirgh92m9A&client_key=animation&limit=1`)
          .then((res)=>res.json())
          .then((resData)=>{
            // this.setState(prevState =>({
            //   trendingList:[...prevState.trendingList,{label:data,url:resData.results[0].media_formats.gif.url}]
            // // }))
              let {trendingList} = this.state
              trendingList.push({label:data,url:resData.results[0].media_formats.gif.url})
              this.setState({trendingList:trendingList})
            })
        })
    }
   
  render() {
   
    if(this.state.trendingList.length>0){
      return (
        <div  className='TrendContainer' >
          {this.state.trendingList.length}
          <div className="leftIcon"onClick={this.scrollHandlerXminus} > <i className="fa-solid fa-angle-left"></i> </div>
            <div className='trendList' ref={this.trendRef} >
              {
                this.state.trendingList.map((trends,index)=>(
                  (<a href="#" key={index}>
                    <Card  label={trends.label} url={trends.url} />
                  </a>)
                ))
              }
            </div>
          <div className="rightIcon" onClick={this.scrollHandlerX}  > <i className="fa-solid fa-angle-right"></i> </div>
        </div>
      )
    }
    else{
      return(
        <div align="center">
          <h2>Please Wait</h2>
        </div>
      )
    }
  }
}
