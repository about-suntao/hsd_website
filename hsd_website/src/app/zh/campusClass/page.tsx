import React from 'react'
import Banner from '@/components/banner/banner'
import bannerImg from '../../../../public/img/campusClass/bannerBg.webp'
import Landscape from './landscape/landscape'
import Environment from './environment/environment'

function CampusClass() {
  return (
    <div>
      <Banner backImg={bannerImg} title={'校园风采'} titleEn={'Campus Environment'}></Banner>
      <Landscape></Landscape>
      <Environment></Environment>
    </div>
  )
}

export default CampusClass
