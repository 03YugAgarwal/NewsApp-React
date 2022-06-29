import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./css/News.css"

export class News extends Component {

  constructor(){
    super();
    this.state= {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0eca9886e5e4707a013b1b793e18624&page=1";
    
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
  }
  
  handlePrevClick = async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0eca9886e5e4707a013b1b793e18624&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    
    this.setState({articles: parsedData.articles})
    
    this.setState({
      page: this.state.page-1,
      
    })
  }
  handleNextClick = async ()=>{
    if(this.state.page+1> Math.ceil(this.state.totalResults/20)){
      
    }else{
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0eca9886e5e4707a013b1b793e18624&page=${this.state.page+1}&pageSize=20`;
     let data = await fetch(url);
     let parsedData = await data.json();
     // console.log(parsedData);
 
     this.setState({articles: parsedData.articles})
 
     this.setState({
       page: this.state.page+1,
       
     })
    }
  }

  render() {
    return (
      <div>
        <h1 className='news-primary-heading'>NewNew News- Top Heading</h1>
        <div className="news-grid">
            {this.state.articles.map((e)=>{
              return <NewsItem key={e.url} title={e.title} description={e.description?e.description.slice(0,100)+".......":""} imageUrl={e.urlToImage?e.urlToImage:"https://assets.mspimages.in/wp-content/uploads/2022/06/Untitled-design-1-1.png"} newsUrl={e.url} />
            })}
        </div>
        <div className="news-next-page">
          <button disabled={this.state.page<=1} className="news-btn" onClick={this.handlePrevClick}>&laquo; Previous</button>
          <button className="news-btn" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News