import React from 'react'
import styles from './require.module.scss'

import Image from 'next/image'

import requireImg1 from '../../../../../public/img/joinUs/require.webp'
import people from '../../../../../public/img/joinUs/people.webp'
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

function Require() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={requireImg1} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <div className={styles.titleLogo}>
              <Image src={people} alt=''></Image>
            </div>
            <div className={styles.titleText}>
              <p>岗位要求</p>
            </div>
          </div>
          <div className={styles.content}>
            <ListItem value="本科及以上学历，各科教师岗位相关专业，英语水平专八级以上水平，英语口语流利，可以无障碍交流，有海外留学经验优先；"></ListItem>
            <ListItem value="了解相关学科的知识结构体系，针对相关学科能进行纯英文授课；专业基本功扎实；"></ListItem>
            <ListItem value="对International courses有一定的了解，有3年及以上相关课程教学经验者优先考虑；"></ListItem>
            <ListItem value="热爱教学，善于表达，讲课生动活泼有感染力；具有较宽广知识储备；热爱教育事业，有良好的亲和力；工作积极主动 、责任心强。"></ListItem>
          </div>
          <div className={styles.schoolLogo}>
            <Image src={schoolLogo} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Require
