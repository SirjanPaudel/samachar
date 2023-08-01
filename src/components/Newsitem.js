import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, authorName, publishedDate, newsSource } = this.props;
    
    return (
      <>
        <div className="card d-flex justify-content-end">
          <div>
        <span className="position-absolute end-0   badge rounded-pill bg-secondary">
   {newsSource}
  </span>
          </div>
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
