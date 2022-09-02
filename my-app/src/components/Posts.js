import React, { useEffect, useState } from 'react'
import Items from './Items'

const Posts = (props)=>{


  const [articles, setArticles]= useState([])

  const updateNews= async()=>{
    let url = `${process.env.REACT_APP_API}`
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.posts)
  }
   useEffect(()=>{
    updateNews();
   },[]);
    return (
      <div className='container '>
        {console.log(articles)}
        {articles.map((element)=>{
           return <div className='row' key={element.id}>
           <Items id = {element.id} title={element.title} description={element.description} commentsCount={Object.keys(element.comments).length} newsUrl={element.url}/>
         </div>
        })}


      </div>
    )

}

export default Posts
