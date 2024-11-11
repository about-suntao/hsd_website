import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import CourseSetting from './courseSetting/courseSetting'
import Advantage from './advantage/advantage'
function Course() {
  return (
    <div>
      <Banner titleEn={'Course Arrangement'}></Banner>
      <CourseSetting></CourseSetting>
      <Advantage></Advantage>
    </div>
  )
}

export default Course
