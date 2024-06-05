import React from 'react'
import Banner from '@/components/banner/banner'
import Advantage from './advantage/advantage'
import Video from './video/video'
import Feature from './feature/feature'
import Holistict from './holistic/holistict'

function International() {
  return (
    <div>
      <Banner title={'国际合作'} titleEn={'International Cooperation'} des={'国际部学生入学即注册美国高中学籍'}></Banner>
      <Advantage></Advantage>
      <Video></Video>
      <Feature></Feature>
      <Holistict></Holistict>
    </div>
  )
}

export default International
