import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'

import divisionImg from '../../../../public/img/home/division.webp'
import rightImg from '../../../../public/img/home/right.webp'

function Division() {

  const data = [
    {
      id: 1,
      label: 'Foxcroft Academy官方合作伙伴',
    }, {
      id: 2,
      label: 'Edexcel官方授权考试中心 (授权代码95078)',
    }, {
      id: 3,
      label: '美高AP授权学校',
    }, {
      id: 4,
      label: 'UCAS 官方注册中心',
    }, {
      id: 5,
      label: 'ASDAN（阿思丹）国际理科竞赛官方考点',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg} alt=''></Image>
        </div>
        <div className={styles.right}>
          <p className={styles.titleEn}>HSD Foreign Language School International Division</p>
          <h2>华盛达外语学校国际部</h2>
          <p className={styles.article}>
            国际部隶属于华盛达外语学校，推行国际先进的素质教育理念，倡导“外语特色、文理兼容、国际合作”的教育模式，还原英美本土教育理念并实现本地化教学，鼓励学生全面发展。国际部面向想要入读QS全球排名前80院校的学生，提供IGCSE课程、A-Level课程、AP课程、雅思课程、托福课程、国际竞赛课程、EPQ项目制课程、PBL项目式课程，旨在为学生打下良好的语言基础，全面提升学术水平，丰富学生背景履历，并助力学生成功进入梦校！
          </p>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <Image src={rightImg} alt=''></Image>
                    <p>{item.label}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Division
