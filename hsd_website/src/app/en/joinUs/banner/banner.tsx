import React from 'react'
import styles from './banner.module.scss'

function Banner() {
  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <h1>JOIN US，INTO THE FUTURE</h1>
        <p className={styles.titleEn}>TEACHER RECRUITMENT</p>
        <div className={styles.title}>
          <hr />
          <p >Ministry of Integration</p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Banner
