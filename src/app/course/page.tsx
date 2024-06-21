import React from 'react'
import Banner from '@/components/banner/banner'
import Advantage from './advantage/advantage'
function Course() {
  return (
    <div>
      <Banner title={'班型介绍'} titleEn={'Class Introduction'}></Banner>
      <Advantage></Advantage>
    </div>
  )
}

export default Course
