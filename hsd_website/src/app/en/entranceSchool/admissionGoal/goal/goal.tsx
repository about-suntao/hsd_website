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
              <p>Upon enrollment, students are registered with a U.S. high school.</p>
              <p>100% of students are accepted into universities ranked in the top 80 globally according to QS rankings.</p>
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
