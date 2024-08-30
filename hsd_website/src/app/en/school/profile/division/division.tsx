import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'
import divisionImg1 from '../../../../../../public/img/school/divisionImg1.webp'
import divisionImg2 from '../../../../../../public/img/school/divisionImg2.webp'


function Division() {
  const str1 = `The International Department is part of the Huashengda Foreign Language School, which implements the international advanced quality education concept, advocates the education model of "foreign language characteristics, compatibility of arts and sciences, and international co - operation", restores the concept of local education in the UK and realises the localised teaching, encouraging students to develop their all-roundedness.`
  const str2 = `The school is the official partner of Foxcroft Academy, the official authorised test centre of Edexcel (authorisation code 95078), the authorised AP school of American Higher Education, the official registration centre of UCAS, and the official test centre of ASDAN International Science Competition.`
  const str3 = `The International Department offers IGCSE, A-Level, AP, IELTS, TOEFL, International Competitions, EPQ and PBL courses for students who want to enter the top 80 QS ranked institutions in the world. We aim to provide students with a good language foundation, improve their academic level, enrich their backgrounds and help them enter their dream schools!`
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg1} alt=''></Image>
          <Image src={divisionImg2} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>HSD Foreign Language School International Division</h2>
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
