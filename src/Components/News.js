import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // REACT HOOKS
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {return string.charAt(0).toUpperCase() + string.slice(1);};

  const updateData = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=a86dedc73a3c451b896dbf7e596cdbd9&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setPage(page + 1);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - ZipperNews`
    updateData();
    //esline-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=a86dedc73a3c451b896dbf7e596cdbd9&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <div className="container my-3" >
      <h1 className="text-center" style={{marginTop:'90px',color: props.mode === "light" ? "#2F4F4F" : "white"}}>
        ZipperNews - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title : ""}
                    description={article.description ? article.description : ""}
                    imageUrl={article.urlToImage ? article.urlToImage : ""}
                    newsUrl={article.url}
                    author={article.author ? article.author : "unknown"}
                    date={article.publishedAt ? article.publishedAt : ""}
                    source={
                      article.source.name ? article.source.name : "unknown"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
     
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;


// Next and Previous Button code SAMPLE:

  // <div className="container d-flex justify-content-between">
  //           <button
  //             disabled={page <= 1}
  //             className="btn btn-dark mx-2"
  //             onClick={this.handlePrevClick}
  //           >
  //             &larr; Previous
  //           </button>
  //           <button
  //             disabled={
  //               page + 1 >
  //               Math.ceil(totalResults / props.pageSize)
  //             }
  //             className="btn btn-dark mx-2"
  //             onClick={this.handleNextClick}
  //           >
  //             Next &rarr;
  //           </button>
  //         </div> 

  // handlePrevClick = async () => {
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });

  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   updateData();
  // };
  // handleNextClick = async () => {
  //   // console.log("Next");
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {
  //   // }
  //   // else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   updateData();
  // };