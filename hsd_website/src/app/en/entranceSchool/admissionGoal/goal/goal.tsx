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
            <h2>Admission Goal</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={goldImg} alt=''></Image>
            </div>
            <div className={styles.card_text}>
              <p>U.S. high school enrollment upon enrollment</p>
              <p>100% of students apply to the top 80 QS ranked universities in the world</p>
            </div>
          </div>
          <div className={styles.list}>
            <h3>AP Program</h3>
            <p>80% of students enroll in top 50 colleges in the U.S.</p>
          </div>
          <div className={styles.list}>
            <h3>A-Level Program</h3>
            <p>50% of students go on to the top 5 universities in the UK, top 3 in Hong Kong, and top 2 in Singapore.</p>
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
