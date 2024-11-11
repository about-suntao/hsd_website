import React from 'react'
import styles from './treatment.module.scss'

import Image from 'next/image'

import tImg1 from '../../../../../public/img/joinUs/treatment.webp'
import money from '../../../../../public/img/joinUs/money.webp'
import schoolLogo from '../../../../../public/img/joinUs/schoolLogo.webp'


const ListItem = ({ value }: any) => {
  return (
    <div className={styles.list_item}>
      <div className={styles.logo}>
        <div className={styles.point}></div>
      </div>
      <p>{value}</p>
    </div>
  )
}

function Treatment() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <div className={styles.titleLogo}>
              <Image src={money} alt=''></Image>
            </div>
            <div className={styles.titleText}>
              <p>Excellent Welfare Benefits</p>
            </div>
          </div>
          <div className={styles.content}>
            <ListItem value="Payment of five insurance premiums"></ListItem>
            <ListItem value="Provide well-equipped teachers' apartments and meal allowance"></ListItem>
            <ListItem value="Legal holidays and various holiday benefits, paid winter and summer vacations"></ListItem>
            <ListItem value="Reduced tuition fees for children attending top local primary and secondary schools"></ListItem>
            <ListItem value="Reimbursement of train tickets for interviews"></ListItem>
          </div>
          <div className={styles.schoolLogo}>
            <Image src={schoolLogo} alt=''></Image>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={tImg1} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Treatment



