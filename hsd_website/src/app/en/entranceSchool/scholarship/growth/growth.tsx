import React from 'react'
import styles from './growth.module.scss'
import Image from 'next/image'

import glodImg from '../../../../../../public/img/apply/gold.webp'
import GrowImg from '../../../../../../public/img/apply/growImg.webp'

function Growth() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.grow}>
          <div className={styles.title}>
            <h2>Growth Scholarship</h2>
          </div>
          <div className={styles.rules}>
            <Image src={glodImg} alt='Rating rule'></Image>
            <p>Rating rule</p>
          </div>
          <div className={styles.list}>
            <p>GPA at the end of the semester into the top 10% of the grade ranking, the student will be awarded a First prize scholarship of <span>RMB 10,000</span> at the beginning of the next semester.</p>
            <p>GPA at the end of the semester is in the top 20% of the class, the student will be awarded a Second prize scholarship of <span>RMB 5,000</span> at the beginning of the next semester.</p>
            <p>GPA at the end of the semester is ranked in the top 30% of the class, the student will be awarded a Third prize scholarship of <span>RMB 3,000</span> at the beginning of the next semester.</p>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={GrowImg} alt='Growth scholarship'></Image>
        </div>
      </div>
    </div>
  )
}

export default Growth
