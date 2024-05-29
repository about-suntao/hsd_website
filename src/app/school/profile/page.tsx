import React from 'react'
import Banner from '@/components/banner/banner'
import Introduce from './introduce/introduce'
import Data from '../../home/data/data'
import Division from './division/division'
import Mission from './mission/mission'
import Features from '../../home/features/features'
function School() {
  return (
    <div>
      <Banner title="学校概况" titleEn="School Profile"></Banner>
      <Introduce></Introduce>
      <Data></Data>
      <Division></Division>
      <Mission></Mission>
      <Features></Features>
    </div>
  )
}

export default School
