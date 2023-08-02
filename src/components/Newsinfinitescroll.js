import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const Newsinfinitescroll = (props) => {


  let imageForNull = "https://www.telegraph.co.uk/content/dam/cricket/2023/07/14/TELEMMGLPICT000342431470_16893168929680_trans_NvBQzQNjv4Bq0Z2m9fTZlPCaE9lzDAtkDtf11FLKtqwYaxK652uKeQE.jpeg?impolicy=logo-overlay";
  const [articles, setArticles] = useState([])
  let [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }
  const fetchMoreData = async () => {
    setPage(page+=1)
    console.log(page)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    console.log(articles.length)
  }
  useEffect(() => {
    updateNews();
  }, [])


  return (
    <div className='container my-3 '>
      <h1 className='text-center'>Samachar - Latest Headlines</h1>
      {totalResults === 0 && <Spinner />}
      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className=" container my-3 row">

            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-3 my-2">
                  <Newsitem title={!element.title ? element.title : element.title.slice(0, 25)} description={!element.description ? element.description : element.description.slice(0, 45)} imageUrl={!element.urlToImage ? imageForNull : element.urlToImage} newsUrl={element.url} authorName={element.author} publishedDate={element.publishedAt} newsSource={element.source.name} />
                </div>

              )
            })}
          </div>
        </InfiniteScroll>
      </div>

    </div>
  )
}
Newsinfinitescroll.defaultProps = {
  country: 'us',
  category: 'general',
  pageSize: 16,
};
Newsinfinitescroll.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
};

export default Newsinfinitescroll; 