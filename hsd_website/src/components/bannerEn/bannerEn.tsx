import React from 'react'
import styles from './bannerEn.module.scss'
import Image from 'next/image'
function Banner({ backImg, title, titleEn, des }: any) {
  return (
    <div className={styles.pages}>
      {backImg && <Image src={backImg} alt=''></Image>}
      <h1>{titleEn}</h1>
      {des && <p className={styles.des}>{des}</p>}
    </div>
  )
}

export default Banner
