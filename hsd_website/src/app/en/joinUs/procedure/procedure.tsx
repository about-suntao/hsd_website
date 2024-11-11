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
            <h2>JOIN US</h2>
          </div>
          <div className={styles.recruitment}>
            <h3>Recruitment Procedure</h3>
            <p className={styles.ask}>Please note your Name + Position</p>
            <div className={styles.list}>
              <Image src={mail} alt=''></Image>
              <p>Please submit your resume to the recruitment e-mail hr@hsd-elite.org</p>
            </div>
            <div className={styles.list}>
              <Image src={phone} alt=''></Image>
              <p>Call Human Resources Department: (Ms. Shang) 17602968379 / (Ms. Hu) 18072718787</p>
            </div>
            <div className={styles.list}>
              <Image src={me} alt=''></Image>
              <p>The school will call the initial examination of qualified candidates to come to the school for an interview</p>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <Image src={joinUsImg} alt=''></Image>
          <div className={styles.text}>
            <p>We invite outstanding teachers and professionals who are passionate about education across the country to join us!</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Procedure
