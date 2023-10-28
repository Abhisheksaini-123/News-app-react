import React, { Component } from 'react';
import Newsitem  from './Newsitem'

 export class News extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      articles:[],
    loading : false 
    }
  }
   async componentDidMount(){
let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e337ca487c4741289b2b2a0b484680d0"
let data = await fetch (url);
let parseData = await data.json()
console.log(parseData);
this.setState({articles:parseData.articles})

  }

  render() {
    return (
      
    <div className="container my-3">
    <h2>TOP HEADLINE</h2>
    <div className="row">
    {this.state.articles.map((element)=>{
return  <div className="col-md-6"key = {element.url} >
<Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
</div>

    })};

    

    </div>
  </div>
    );
  }
}

export default News;
