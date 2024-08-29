import React from 'react'
import Banner from '@/components/banner/banner'
import NewsList from './newsList/newsList'
import bannerImg from '../../../../public/img/campusClass/bannerBg.webp'


function Page() {
  return (
    <>
      <Banner backImg={bannerImg} title={'最新资讯'} titleEn={'Latest News'}></Banner>
      <NewsList></NewsList>
    </>
  )
}

export default Page
