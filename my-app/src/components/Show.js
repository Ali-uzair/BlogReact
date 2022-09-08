import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Show.css";
import { getPost } from "../api/PostsApi";

const Show = (props) => {
  const [articles, setArticles] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getPost(id).then((res) => setArticles(res));
  }, [id]);

  return (
    <div className="container">
      {articles.length === 0 ? (
        <div className="divStyle">no data found</div>
      ) : (
        <div>
          <div className="titleDiv">
            <div className="innerDiv">
              <p className="discription">{articles.title}</p>

              <p>
                <strong>Description: </strong>
                {articles.description}
              </p>

              <p>
                <strong>Published at: </strong>
                {articles.published}
              </p>

              <p>
                <strong>Created by: </strong>
                {articles.name}
              </p>
            </div>
          </div>
          <br />
          <div
            className="postDataDiv"
            dangerouslySetInnerHTML={{ __html: articles.content }}
          />
          <hr className="divStyle" />

          <div className="container">
            <div className="comment-form">
              <div className="row">
                <div className="col-md-6 comtDataDiv">
                  <h2 className="subtitle is-5"> Comments</h2>
                  {articles.comments.map((comment) => {
                    return (
                      <div key={comment.commentid}>
                        <strong style={{ color: "blue" }}>
                          {comment.name}:{" "}
                        </strong>
                        {comment.body}
                        <hr></hr>
                      </div>
                    );
                  })}
                </div>
                <div className="col-md-6 comtDataDiv">
                  <h3 className="subtitle is-3">Suggestions</h3>
                  {articles.suggestions.map((suggest) => {
                    return (
                      <div key={suggest.suggestid}>
                        <strong style={{ color: "blue" }}>
                          {suggest.name}:{" "}
                        </strong>
                        {suggest.body}
                        <hr></hr>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
