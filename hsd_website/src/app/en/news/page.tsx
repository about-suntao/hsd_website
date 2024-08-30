import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import NewsList from './newsList/newsList'
import bannerImg from '../../../../public/img/campusClass/bannerBg.webp'


function Page() {
  return (
    <>
      <Banner backImg={bannerImg} titleEn={'Latest News'}></Banner>
      <NewsList></NewsList>
    </>
  )
}

export default Page
