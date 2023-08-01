import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class Newsinfinitescroll extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 16,
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  articles = [];
  imageForNull = "https://www.telegraph.co.uk/content/dam/cricket/2023/07/14/TELEMMGLPICT000342431470_16893168929680_trans_NvBQzQNjv4Bq0Z2m9fTZlPCaE9lzDAtkDtf11FLKtqwYaxK652uKeQE.jpeg?impolicy=logo-overlay";
  constructor() {
    super();
    this.state =
    {
      articles: this.articles,
      page: 1,
      loading: true,
      totalResults: 0,
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  fetchMoreData = async () => {
    await this.setState({
      page: this.state.page += 1 
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })

  }
  async componentDidMount() {
    this.updateNews(); 

  }

  render() {
    return (
      <div className='container my-3 '>
        <h1 className='text-center'>Samachar - Latest Headlines</h1>
        {this.state.totalResults === 0 && <Spinner />}
        <div className="container">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className=" container my-3 row">

              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-3">
                    <Newsitem title={!element.title ? element.title : element.title.slice(0, 25)} description={!element.description ? element.description : element.description.slice(0, 45)} imageUrl={!element.urlToImage ? this.imageForNull : element.urlToImage} newsUrl={element.url} authorName={element.author} publishedDate={element.publishedAt} newsSource={element.source.name} />
                  </div>

                )
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}
