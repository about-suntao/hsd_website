import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import bannerImg from '../../../../../public/img/campusClass/bannerBg.webp'
import Operation from './operation/operation'
import Research from './research/research'

function Management() {
  return (
    <>
      <Banner backImg={bannerImg} titleEn='Teaching and research team' ></Banner>
      <Research></Research>
      <Operation></Operation>
    </>
  )
}

export default Management
