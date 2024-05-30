import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
function Banner({ backImg, title, titleEn }: any) {
  return (
    <div className={styles.pages}>
      {backImg && <Image src={backImg} alt=''></Image>}
      <h1>{title}</h1>
      <p>{titleEn}</p>
    </div>
  )
}

export default Banner
