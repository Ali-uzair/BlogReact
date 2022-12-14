import React, { useEffect } from "react";
import Items from "./Items";
import "./Posts.css";
import { getPosts } from "../api/PostsApi";

const Posts = (props) => {
  const [articles, setArticles] = React.useState([]);
  useEffect(() => {
    getPosts().then((res) => setArticles(res.posts));
  }, []);

  return (
    <div className="container" data-testid='posts'>
      {articles.length === 0 ? (
        <div className="divStyle">No Post Available </div>
      ) : (
        <div data-testid='post'>
        <p>posts available</p>
        {articles?.map((element) => {
          return (
            <div className="row" key={element.id} data-testid='item'>
              <Items
                id={element.id}
                title={element.title}
                description={element.description}

              />
            </div>
          );
        })}
        </div>

      )}
    </div>
  );
};

export default Posts;
