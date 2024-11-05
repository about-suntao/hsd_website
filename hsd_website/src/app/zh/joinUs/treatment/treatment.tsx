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
              <p>优厚的福利待遇</p>
            </div>
          </div>
          <div className={styles.content}>
            <ListItem value="缴纳五险一金"></ListItem>
            <ListItem value="提供设施完善的教师公寓和餐补"></ListItem>
            <ListItem value="享受法定节假日及各类节日福利 、带薪寒暑假 "></ListItem>
            <ListItem value="子女就读可享受当地顶级中小学部分学费减免 "></ListItem>
            <ListItem value="面试报销火车票"></ListItem>
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



