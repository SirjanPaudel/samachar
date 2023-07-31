import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, authorName, publishedDate, newsSource } = this.props;
    
    return (
      <>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-secondary" style={{left: "80%", zIndex:"1"}}>
   {newsSource}
  </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!authorName?'unknown':authorName}</small></p>
            <p className="card-text"><small className="text-body-secondary">{new Date(publishedDate).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More...</a>
          </div>
        </div>
       
      </>
    )
  }
}
