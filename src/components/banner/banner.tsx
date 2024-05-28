import React from 'react'
import styles from './banner.module.scss'
function Banner({ title, titleEn }: any) {
  return (
    <div className={styles.pages}>
      <h1>{title}</h1>
      <p>{titleEn}</p>
    </div>
  )
}

export default Banner
