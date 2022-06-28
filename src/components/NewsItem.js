import React, { Component } from 'react'
import "./css/NewsItem.css"

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl} = this.props;
        return (
            <div className="news-item-card">
                <img src={imageUrl} alt="" className="news-item-img" />
                <h4 className="news-item-heading">{title}</h4>
                <p className="news-item-p">{description}</p>
                <a href="/newsItem">IDK</a>
            </div>
    )
  }
}

export default NewsItem