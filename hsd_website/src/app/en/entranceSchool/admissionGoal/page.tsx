import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import Goal from './goal/goal'
import Schedule from './schedule/schedule'
import bannerImg from '../../../../../public/img/apply/goalBanner.webp'

function AdmissionGoal() {
  return (
    <div>
      <Banner backImg={bannerImg} titleEn={'Admission Goal'}></Banner>
      <Goal></Goal>
      <Schedule></Schedule>
    </div>
  )
}

export default AdmissionGoal
