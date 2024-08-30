import React from 'react'
import styles from './table.module.scss'
import Image from 'next/image'

import tableImg from '../../../../../../public/img/apply/scholarshipEn.webp'

function Table() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Scholarship for Further Education</h2>
        </div>
        <div className={styles.tips}>
          <p>The following scholarships are awarded to applicants with outstanding graduation progression results：</p>
        </div>
        <div className={styles.picture}>
          <Image src={tableImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Table
