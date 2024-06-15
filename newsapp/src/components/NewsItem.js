import { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, author,source } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'70%',zIndex:'1'}}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2024/01/25/1600x900/Stock_market_today_iStock_1663298052199_1706148113018.jpg"} className="card-img-top" alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <small className="text-body-secondary">By {author ? author : "Unknown"} <br></br> On {new Date(date).toGMTString()}</small><br></br>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}