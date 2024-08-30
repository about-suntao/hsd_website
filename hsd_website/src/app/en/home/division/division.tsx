import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'

import divisionImg from '../../../../../public/img/home/division.webp'
import rightImg from '../../../../../public/img/home/right.webp'

function Division() {

  const data = [
    {
      id: 1,
      label: 'Foxcroft Academy Official Partner',
    }, {
      id: 2,
      label: 'Edexcel Official Authorised Test Centre (Authorisation Code 95078)',
    }, {
      id: 3,
      label: 'US High School AP Authorised School',
    }, {
      id: 4,
      label: 'UCAS Official Registration Centre',
    }, {
      id: 5,
      label: 'ASDAN International Science Competition Official Test Centre',
    },
  ]

  const str = `The International Department is a part of Huashengda Foreign Language School. It implements advanced international quality education concepts, advocates the education model of "foreign language characteristics, compatibility of arts and sciences, and international co-operation", and encourages students to achieve all-round development by restoring the concepts of British and American local education and realising localised teaching. The International Department offers IGCSE, A-Level, AP, IELTS, TOEFL, International Competitions, EPQ and PBL courses for students who want to enter the top 80 QS ranked colleges and universities, aiming to provide students with good foundations in language, comprehensively improve their academic levels, enrich their backgrounds and help them enter their dream schools!`

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg} alt=''></Image>
        </div>
        <div className={styles.right}>
          <h2>HSD Foreign Language School International Division</h2>
          <p className={styles.article}>
            {str}
          </p>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <Image src={rightImg} alt=''></Image>
                    <p>{item.label}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Division
