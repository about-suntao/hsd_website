import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import bannerImg from '../../../../public/img/campusClass/bannerBg.webp'
import Landscape from './landscape/landscape'
import Environment from './environment/environment'

function CampusClass() {
  return (
    <div>
      <Banner backImg={bannerImg} titleEn={'Campus Environment'}></Banner>
      <Landscape></Landscape>
      <Environment></Environment>
    </div>
  )
}

export default CampusClass
