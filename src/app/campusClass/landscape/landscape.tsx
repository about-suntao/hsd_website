import React from 'react'
import styles from './landscape.module.scss'
import Image from 'next/image'

import IconImg from '../../../../public/img/campusClass/icon.png'
import landspaceImg from '../../../../public/img/campusClass/landscape.png'

function Landscape() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <Image src={IconImg} alt=''></Image>
          </div>
          <div className={styles.titleBox}>
            <h2>整体景观</h2>
            <p>Overall Landscape</p>
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
