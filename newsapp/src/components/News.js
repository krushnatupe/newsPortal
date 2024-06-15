import { Component } from "react";
import { NewsItem } from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category : 'general'
    }
    
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);    
        console.log("News Constructor called");

        this.state = {
            articles: [],
            page: 1,
            loading : false
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6449cda5fb6a426c9075bfc3c393f81f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6449cda5fb6a426c9075bfc3c393f81f&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading:false
        // });
        this.updateNews();
        
    }

    handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6449cda5fb6a426c9075bfc3c393f81f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState(
        //     {
        //         page: this.state.page - 1,
        //         articles: parsedData.articles,
        //         loading:false
        //     });
        this.setState({page:this.state.page-1});
        this.updateNews();

    }
    handleNextClick = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6449cda5fb6a426c9075bfc3c393f81f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState(
        //     {
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading:false
        //     });

        this.setState({page:this.state.page+1});
        this.updateNews();


    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row my-5">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        )
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}                               