import React from 'react'
import styles from './procedure.module.scss'

import Image from 'next/image'

import mail from '../../../../../public/img/joinUs/mail.webp'
import phone from '../../../../../public/img/joinUs/phone.webp'
import me from '../../../../../public/img/joinUs/me.webp'

import joinUsImg from '../../../../../public/img/joinUs/joinUs.webp'


function Procedure() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.procedure}>
          <div className={styles.title}>
            <h2>加入我们</h2>
            <p>JOIN US！</p>
          </div>
          <div className={styles.recruitment}>
            <h3>招聘程序</h3>
            <p className={styles.ask}>应聘请备注姓名+岗位</p>
            <div className={styles.list}>
              <Image src={mail} alt=''></Image>
              <p>请将简历投递至招聘邮箱hr@hsd-elite.org</p>
            </div>
            <div className={styles.list}>
              <Image src={phone} alt=''></Image>
              <p>致电人力资源部：（尚老师）17602968379 /（胡老师）18072718787</p>
            </div>
            <div className={styles.list}>
              <Image src={me} alt=''></Image>
              <p>校方将致电初审合格者来校参加面试</p>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <Image src={joinUsImg} alt=''></Image>
          <div className={styles.text}>
            <p>湖州华盛达融合部诚邀 </p>
            <p>全国优秀教师及热爱教育事业的专业人士加入！</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Procedure
