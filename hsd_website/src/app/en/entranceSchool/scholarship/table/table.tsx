import React from 'react'
import styles from './table.module.scss'
import Image from 'next/image'

import tableImg from '../../../../../../public/img/apply/scholarship.webp'

function Table() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>升学奖学金</h2>
          <p>Scholarship for Further Education</p>
        </div>
        <div className={styles.tips}>
          <p>以下奖学金用于奖励毕业升学成果突出的申请人：</p>
        </div>
        <div className={styles.picture}>
          <Image src={tableImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Table
