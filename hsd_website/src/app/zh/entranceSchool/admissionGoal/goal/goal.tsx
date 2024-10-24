import React from 'react'
import styles from './goal.module.scss'
import Image from 'next/image'
import goldImg from '../../../../../../public/img/apply/gold.webp'
import goalimg from '../../../../../../public/img/apply/goalImg.webp'

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
              <p>实现学分互换，拿到全球认可的毕业证书</p>
              <p>100%学生申请到全球QS排名前80大学</p>
            </div>
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
