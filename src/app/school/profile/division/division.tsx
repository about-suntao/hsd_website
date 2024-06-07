import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'
import divisionImg1 from '../../../../../public/img/school/divisionImg1.webp'
import divisionImg2 from '../../../../../public/img/school/divisionImg2.webp'


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
            <p>HSD Foreign Language School International Division</p>
            <h2>华盛达外语学校国际部</h2>
          </div>
          <div className={styles.article}>
            <p>国际部隶属于华盛达外语学校，推行国际先进的素质教育理念，倡导“外语特色、文理兼容、国际合作”的教育模式，专注于外语能力的提升，通过提供全面的国际英语课程，让学生获得沉浸式的语言学习体验，融合文科和理科，培养学生的创造力、批判性思维和跨学科学习能力，为他们提供全面的教育，以应对未来挑战，通过与国际学校、大学和组织的合作，为学生提供与世界各地的同龄人学习和合作的机会，还原英国本土教育理念并实现本地化教学，鼓励学生全面发展。</p>
            <p>国际部面向想要入读QS全球排名前80院校的学生，提供IGCSE课程、A-Level课程、AP课程、雅思课程、托福课程、国际竞赛课程、EPQ项目制课程、PBL项目式课程，旨在为学生打下良好的语言基础，全面提升学术水平，丰富学生背景履历，并助力学生成功进入梦校！</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Division
