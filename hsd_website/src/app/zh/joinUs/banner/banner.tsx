import React from 'react'
import styles from './banner.module.scss'

function Banner() {
  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <h1>加入我们，启迪未来</h1>
        <p className={styles.titleEn}>TEACHER RECRUITMENT</p>
        <div className={styles.title}>
          <hr />
          <p >融合部教师招聘</p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Banner
