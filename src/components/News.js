import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./css/News.css"

export class News extends Component {
  render() {
    return (
      <div>
        <h2>NewNew News- Top Heading</h2>
        <div className="news-grid">
            <NewsItem title="title" description="some Description"/>
            <NewsItem title="title" description="some Description"/>
            <NewsItem title="title" description="some Description"/>
        </div>
      </div>
    )
  }
}

export default News