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
      <Banner title="走近华盛达" titleEn="Approaching HSD Foreign Language School"></Banner>
      <Introduce></Introduce>
      <Data></Data>
      <Division></Division>
      <Mission></Mission>
      <Features></Features>
    </div>
  )
}

export default School
