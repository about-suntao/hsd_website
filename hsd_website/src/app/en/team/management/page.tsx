import React from 'react'
import Banner from '@/components/banner/banner'
import CoreTeam from './coreTeam/coreTeam'
import ForeignTeachers from './foreignTeachers/foreignTeachers'
import Educational from './educational/educational'

function Management() {
  return (
    <>
      {/* <Banner title='管理团队' titleEn="Management Team"></Banner> */}
      {/* <CoreTeam></CoreTeam> */}
      <ForeignTeachers></ForeignTeachers>
      <Educational></Educational>
    </>
  )
}

export default Management
