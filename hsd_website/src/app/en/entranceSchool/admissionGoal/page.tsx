import React from 'react'
import Banner from '@/components/banner/banner'
import Goal from './goal/goal'
import Schedule from './schedule/schedule'
import bannerImg from '../../../../../public/img/apply/goalBanner.webp'

function AdmissionGoal() {
  return (
    <div>
      <Banner backImg={bannerImg} title={'升学目标'} titleEn={'Admission Goal'}></Banner>
      <Goal></Goal>
      <Schedule></Schedule>
    </div>
  )
}

export default AdmissionGoal
