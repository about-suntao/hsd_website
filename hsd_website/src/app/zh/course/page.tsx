import React from 'react'
import Banner from '@/components/banner/banner'
import CourseSetting from './courseSetting/courseSetting'
import Advantage from './advantage/advantage'
function Course() {
  return (
    <div>
      <Banner title={'课程安排'} titleEn={'Course Arrangement'}></Banner>
      <CourseSetting></CourseSetting>
      <Advantage></Advantage>
    </div>
  )
}

export default Course
