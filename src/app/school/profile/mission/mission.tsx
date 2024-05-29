import React from 'react'
import styles from './mission.module.scss'
import Image from 'next/image'

import M1 from '../../../../../public/img/school/M1.png'
import M2 from '../../../../../public/img/school/M2.png'
import M3 from '../../../../../public/img/school/M3.png'
import M4 from '../../../../../public/img/school/M4.png'


function Mission() {

  const data = [
    {
      id: 1,
      logo: M1,
      title: '融合探究',
      label: '融合不同教学体系优势，培养学生具有国际视野和跨文化沟通能力。通过探究式学习，鼓励学生主动探索、提问和解决问题，激发学生的好奇心和创造力。',
    }, {
      id: 2,
      logo: M2,
      title: '协同发展',
      label: '学校注重学生、教师、家长之间的协同合作，通过建立有效的沟通机制，鼓励各方积极参与学校事务，共同为学生的全面发展和学校的持续进步提供支持。',
    }, {
      id: 3,
      logo: M3,
      title: '立德育人',
      label: '学校将德育教育作为教育的核心内容之一，注重培养学生的诚信、尊重、合作和关爱等品质，引导学生形成正确的价值观和人生观。',
    }, {
      id: 4,
      logo: M4,
      title: '博爱世界',
      label: '学校倡导博爱精神，培养具有全球视野和人文关怀的人才。通过多元文化课程、国际交流项目和志愿服务等活动，让学生成为具有国际竞争力和社会责任感的公民。',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>办学理念</h2>
          <p>Educational Mission</p>
        </div>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.logo}>
                    <Image src={item.logo} alt=''></Image>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Mission
