import React from 'react'
import Banner from '@/components/banner/banner'
import Growth from './growth/growth'
import Table from './table/table'

import bannerImg from '../../../../public/img/apply/goalBanner.webp'

function AdmissionGoal() {
  return (
    <div>
      <Banner backImg={bannerImg} title={'奖学金政策'} titleEn={'Scholarship Policy'}></Banner>
      <Growth></Growth>
      <Table></Table>
    </div>
  )
}

export default AdmissionGoal
