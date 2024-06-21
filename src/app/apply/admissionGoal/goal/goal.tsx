import React from 'react'
import styles from './goal.module.scss'
import Image from 'next/image'
import goldImg from '../../../../../public/img/apply/gold.webp'
import goalimg from '../../../../../public/img/apply/goalImg.webp'


function Goal() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.goal}>
          <div className={styles.title}>
            <h2>升学目标</h2>
            <p>Admission Goal</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={goldImg} alt=''></Image>
            </div>
            <div className={styles.card_text}>
              <p>入学即注册美国高中学籍</p>
              <p>100%学生申请到全球QS排名前80大学</p>
            </div>
          </div>
          <div className={styles.list}>
            <h3>AP方向</h3>
            <p>80%学生升入美国TOP50大学</p>
          </div>
          <div className={styles.list}>
            <h3>A-Level 方向</h3>
            <p>50%学生升入英国前5、中国香港前3、新加坡前2大学</p>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={goalimg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Goal
