import React from 'react'
import styles from './features.module.scss'
import Image from 'next/image'

import featureImg from '../../../../public/img/home/feature.png'

function Features() {

  const data = [
    {
      id: 1,
      logo: featureImg,
      title: '全员导师制',
      titleEn: 'Full Mentorship System',
      label: '融合不同教学体系优势，培养学生具有国际视野和跨文化沟通能力。通过探究式学习，鼓励学生主动探索、提问和解决问题，激发学生的好奇心和创造力。',
    }, {
      id: 2,
      logo: featureImg,
      title: '体制内管理模式',
      titleEn: 'Internal Management Model',
      label: '作息规律，管理严格，帮助学生提高自主管理能力，力求更好的升学结果。',
    }, {
      id: 3,
      logo: featureImg,
      title: '小班化教学',
      titleEn: 'Small Class Teaching',
      label: '每班30人，师生比1:5，有效保证对学生的精准培养，让每一位学生找到最适合自己的未来之路。',
    }, {
      id: 4,
      logo: featureImg,
      title: '国际竞赛规划与课程',
      titleEn: 'International Competition Planning and Courses',
      label: '进行专业的国际竞赛规划，提供高效的竞赛考前指导与课程。',
    }, {
      id: 5,
      logo: featureImg,
      title: '走班制教学',
      titleEn: 'Flexible Class Scheduling',
      label: '充分赋予学生主体地位，一人一课表，因材施教，确保每位学生都能够得到切实提高。',
    }, {
      id: 6,
      logo: featureImg,
      title: '一流师资团队',
      titleEn: 'Top-tier Teaching Staff',
      label: '师资团队教学经验丰富、拥有国际教育背景，将先进的教学理念融入课堂教学与日常管理。',
    }
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>办学特色</h2>
          <p>Educational Features</p>
        </div>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.card_left}>
                    <Image src={item.logo} alt={item.title}></Image>
                  </div>
                  <div className={styles.card_right}>
                    <div className={styles.card_title}>
                      <p>{item.title}</p>
                      <span>{item.titleEn}</span>
                    </div>
                    <div className={styles.label}>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Features
