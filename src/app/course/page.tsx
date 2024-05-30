import React from 'react'
import Banner from '@/components/banner/banner'
import Advantage from './advantage/advantage'
import Schedule from './schedule/schedule'
function Course() {
  return (
    <div>
      <Banner title={'班型介绍'} titleEn={'Class Introduction'}></Banner>
      <Advantage></Advantage>
      <Schedule></Schedule>
    </div>
  )
}

export default Course
