import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'
import divisionImg1 from '../../../../../../public/img/school/divisionImg1.webp'
import divisionImg2 from '../../../../../../public/img/school/divisionImg2.webp'


function Division() {
  const str1 = `Foxcroft Academy HSD is part of the Huashengda Foreign Language School, which promotes the international advanced quality education concept, advocates the education model of Foreign language characteristics, compatibility of arts and sciences, and international co-operation’, restores the concept of British native education and realises localised teaching, and encourages students to develop their all-roundedness.`
  const str2 = `Huashengda Foreign Language School is a Foxcroft Academy Friendly School, an Edexcel Authorised Examination Centre, an AP Authorised School, an official UCAS Registration Centre, and an official test centre for the ASDAN International Science Competition.`
  const str3 = `For students who want to enter the top 80 QS ranked colleges and universities, the Inclusion Department provides English, Maths, Physics, Chemistry, Economics, Art, Chinese, Psychology, PE and other general education courses, as well as IELTS, TOEFL, International Competition Courses, EPQ, and PBL, aiming to provide students with a good foundation in language, to improve their academic level, to enrich their backgrounds and to help them succeed in their dream schools! help students successfully enter their dream schools!`
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg1} alt=''></Image>
          <Image src={divisionImg2} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>Foxcroft Academy HSD</h2>
          </div>
          <div className={styles.article}>
            <p>{str1}</p>
            <p>{str2}</p>
            <p>{str3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Division
