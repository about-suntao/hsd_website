import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'
import divisionImg1 from '../../../../../../public/img/school/divisionImg1.webp'
import divisionImg2 from '../../../../../../public/img/school/divisionImg2.webp'


function Division() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg1} alt=''></Image>
          <Image src={divisionImg2} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <p>Foxcroft Academy HSD</p>
            <h2>华盛达外语学校融合部</h2>
          </div>
          <div className={styles.article}>
            <p>融合部隶属于华盛达外语学校，推行国际先进的素质教育理念，倡导“外语特色、文理兼容、国际合作”的教育模式，还原英国本土教育理念并实现本地化教学，鼓励学生全面发展。</p>
            <p>华盛达外语学校是Foxcroft Academy 友好学校，Edexcel官方授权考试中心、AP授权学校、UCAS 官方注册中心、ASDAN（阿思丹）国际理科竞赛的官方考点。</p>
            <p>融合部面向想要入读QS全球排名前80院校的学生，提供英语、数学、物理、化学、经济、艺术、中文、心理、PE等通识课程，融合雅思课程、托福课程、国际竞赛课程、EPQ项目制课程、PBL项目式课程，旨在为学生打下良好的语言基础，全面提升学术水平，丰富学生背景履历，并助力学生成功进入梦校！</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Division
