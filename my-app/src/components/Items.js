import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
const NewsItem = (props) => {
  let { title, description, id } = props;
  return (
    <div>
      <div className="card mb-4 bg-light" data-testid='list'>
        <div className="card-body" onClick={event => window.location.href=`show/${id}`}>
          {/* <Link to={`show/${id}`}>
            <h5 className="card-title item">{title}</h5>
          </Link> */}
          <h5 className="card-title item">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
