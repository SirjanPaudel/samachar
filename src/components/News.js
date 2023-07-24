import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps ={
    country : 'us', 
    category : 'general',
    pageSize : 16
  }
  static propTypes = {
    country : PropTypes.string,
    category: PropTypes.string, 
    pageSize : PropTypes.number
  }
  articles = [];
  imageForNull = "https://www.telegraph.co.uk/content/dam/cricket/2023/07/14/TELEMMGLPICT000342431470_16893168929680_trans_NvBQzQNjv4Bq0Z2m9fTZlPCaE9lzDAtkDtf11FLKtqwYaxK652uKeQE.jpeg?impolicy=logo-overlay";
  constructor() {
    super();
    this.state =
    {
      articles: this.articles,
      page: 1,
      loading:false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47ea25dd64bc4c9ca2d46b3e3e83bd51&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false })
  }
  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47ea25dd64bc4c9ca2d46b3e3e83bd51&page=${this
      .state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47ea25dd64bc4c9ca2d46b3e3e83bd51&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })
  }


  render() {
    return (
      
      <div className='container my-3 '>
        <h1 className='text-center'>Samachar - Latest Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className=" my-3 row">
          {!this.state.loading&&this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-3">
                <Newsitem title={!element.title ? element.title : element.title.slice(0, 25)} description={!element.description ? element.description : element.description.slice(0, 45)} imageUrl={!element.urlToImage ? this.imageForNull : element.urlToImage} newsUrl={element.url} />
              </div>

            )
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevious} type="button" className="btn btn-primary">&laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNext} type="button" className="btn btn-primary">Next &raquo;</button>
        </div>
      </div>
      
    )
  }
}
