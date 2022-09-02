import React from 'react'
import { Link } from 'react-router-dom';
const NewsItem =(props)=>{
    let {title, description, commentsCount, id} = props;
    return (

      <div>
        <div className='card mb-4 bg-light' >
          <div className="card-body">
          <Link to={`show/${id}`}>
            <h5 className="card-title" style={{ textDecoration: 'underline black', color:'black' }}>{title}</h5>
          </Link>
            <p className="card-text">{description}</p>
          </div>
        </div>

      </div>
    )
}

export default NewsItem
