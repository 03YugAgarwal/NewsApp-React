import React, { Component } from 'react'
import "./css/NewsItem.css"

export class NewsItem extends Component {


    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className="news-item-card">
                <div className="news-item-image-div">
                    <img src={imageUrl} alt="img" className="news-item-img" />
                </div>
                <div className="news-item-other-components">
                    <hr className="news-item-hr"/>
                    <h4 className="news-item-heading">{title}</h4>
                    <p className="news-item-p">{description}</p>
                    <hr className="news-item-hr"/>
                    <a href={newsUrl} target="_blanck" >Read More</a>
                </div>
            </div>
    )
  }
}

export default NewsItem