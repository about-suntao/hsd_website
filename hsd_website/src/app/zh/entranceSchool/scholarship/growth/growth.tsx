import React from 'react'
import styles from './growth.module.scss'
import Image from 'next/image'

import glodImg from '../../../../../../public/img/apply/gold.webp'
import GrowImg from '../../../../../../public/img/apply/growImg.webp'

function Growth() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.grow}>
          <div className={styles.title}>
            <h2>成长奖学金</h2>
            <p>Growth Scholarship</p>
          </div>
          <div className={styles.rules}>
            <Image src={glodImg} alt='评比规则'></Image>
            <p>评比规则</p>
          </div>
          <div className={styles.list}>
            <p>学期末GPA进入年级排名前10%，下学期初奖励成长奖一等奖学金<span>10,000元/人</span></p>
            <p>学期末GPA进入年级排名前20%，下学期初奖励成长奖二等奖学金<span>5,000元/人</span></p>
            <p>学期末GPA进入年级排名前30%，下学期初奖励成长奖三等奖学金<span>3,000元/人</span></p>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={GrowImg} alt='成长奖学金'></Image>
        </div>
      </div>
    </div>
  )
}

export default Growth
