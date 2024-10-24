import React from 'react'
import Banner from '@/components/banner/banner'
import Advantage from './advantage/advantage'
import Video from './video/video'
import Feature from './feature/feature'
import Holistict from './holistic/holistict'

function International() {
  return (
    <div>
      <Banner title={'友好学校'} titleEn={'School in Cooperation'} des={'融合部学生可实现学分互换，拿到全球认可的毕业证书'}></Banner>
      <Advantage></Advantage>
      <Video></Video>
      <Feature></Feature>
      <Holistict></Holistict>
    </div>
  )
}

export default International
