import React from 'react'
import Banner from '@/components/banner/banner'
import Advantage from './advantage/advantage'
import Schedule from './schedule/schedule'
function Course() {
  return (
    <div>
      <Banner title={'课程设置'} titleEn={'Class Arrangement'}></Banner>
      <Advantage></Advantage>
      <Schedule></Schedule>
    </div>
  )
}

export default Course
