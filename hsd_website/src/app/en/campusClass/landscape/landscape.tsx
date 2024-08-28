import React from 'react'
import styles from './landscape.module.scss'
import Image from 'next/image'

import IconImg from '../../../../../public/img/campusClass/icon.webp'
import landspaceImg from '../../../../../public/img/campusClass/landscape.webp'

function Landscape() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <Image src={IconImg} alt=''></Image>
          </div>
          <div className={styles.titleBox}>
            <h2>Overall Landscape</h2>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={landspaceImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Landscape
