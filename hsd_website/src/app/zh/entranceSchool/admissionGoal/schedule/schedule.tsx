import React from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'

import scheduleImg from '../../../../../../public/img/apply/schedule.webp'

function Schedule() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>班级类型</h2>
          <p>Class Types</p>
        </div>
        <div className={styles.picture}>
          <Image src={scheduleImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Schedule
