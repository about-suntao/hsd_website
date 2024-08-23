'use client'
import React from 'react'
import NewsList from '../newsList/newsList'

function ArticleDetail({ params }: any) {

  return (
    <div>
      {params?.id &&
        <NewsList articleId={params.id}></NewsList>
      }
    </div>
  )
}

export default ArticleDetail
