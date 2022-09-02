import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'


const Show =(props)=>{
  const [articles, setArticles]= useState([])
  const [comments, setComments]= useState([])
  const [suggestions, setSuggestions]= useState([])
  const param = useParams()
  let id= param.id

  const updateNews= async()=>{
    let url = `${process.env.REACT_APP_API}/${id}`
    let data = await fetch(url)
    let parsedData = await data.json()
    let commentdata = parsedData.comments
    let suggestionsData = parsedData.suggestions
    setSuggestions(suggestionsData)
    setComments(commentdata)
    setArticles(parsedData)

  }
  useEffect(()=>{
    updateNews();
   }, []);
    return (
      <div className='container'>
        <p>
        <strong>title: </strong>
        {articles.title}
        </p>
        <p>
        <strong>description:  </strong>
        {articles.description}
        </p>
        <p>
        <strong>published at: </strong>
        {articles.published}
        </p>
        <p>
        <strong>Created by: </strong>
        {articles.name}
        </p>

        <div dangerouslySetInnerHTML={{ __html: articles.content }} />
        <hr></hr>

        <div className="d-flex">
          <div className="row my-3">
            <span className='like_count'>
               {articles.likes}:Likes
            </span>
          </div>
          <div className='row my-3'>
            <span className='comment_count'>
               {' '}{articles.commentcount}:Comments
            </span>
          </div>

        </div>

        <div className="container">
            <div className="comment-form">
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h2 className="subtitle is-5"> Comments</h2>
                  {comments.map((comment)=>{
                  return<div className='row' key={comment.commentid}>
                    <strong>{comment.name}: </strong>
                    {comment.body}
                    <hr></hr>
                  </div>
                  }
                  )}

                </div>
                <div className="col-md-6">
                    <h3 className="subtitle is-3">Suggestions</h3>
                    {suggestions.map((suggest)=>{
                      return <div key={suggest.suggestid}>
                        <strong>{suggest.name}: </strong>
                        {suggest.body}
                        <hr></hr>
                      </div>
                    }
                      )}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Show
