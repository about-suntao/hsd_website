import React from 'react'
import Banner from '@/components/bannerEn/bannerEn'
import Advantage from './advantage/advantage'
import Video from './video/video'
import Feature from './feature/feature'
import Holistict from './holistic/holistict'

function International() {
  return (
    <div>
      <Banner titleEn={'School in Cooperation'} des={'International students are enrolled in a U.S. high school'}></Banner>
      <Advantage></Advantage>
      <Video></Video>
      <Feature></Feature>
      <Holistict></Holistict>
    </div>
  )
}

export default International
