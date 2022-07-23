import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107085478-1657185428155-gettyimages-1405436430-dscf9132_lqjmzb4m.jpeg?v=1657185479&w=1920&h=1080" : imageUrl} className="card-img-top" alt=" Img" />
                <div className="card-body">
                    <h5 className="card-title">{title}
                        <span class="badge rounded-pill bg-dark mx-3">By {source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem