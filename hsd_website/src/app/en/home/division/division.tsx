import React from 'react'
import styles from './division.module.scss'
import Image from 'next/image'

import divisionImg from '../../../../../public/img/home/division.webp'
import rightImg from '../../../../../public/img/home/right.webp'

function Division() {

  const data = [
    {
      id: 1,
      label: "Foxcroft Academy's Friendly School",
    }, {
      id: 2,
      label: 'Edexcel Official Authorized Test Center',
    }, {
      id: 3,
      label: 'AP Authorized School',
    }, {
      id: 4,
      label: 'UCAS Official Registration Center',
    }, {
      id: 5,
      label: 'ASDAN International Science Competition Official Test Site',
    },
  ]

  const str = `The Integration Department is affiliated to Huashengda Foreign Language School, which promotes the international advanced quality education concept, advocates the education model of "Foreign language characteristics, compatible with liberal arts and science, and international cooperation", restores the British and American local education concepts and realizes localized teaching, and encourages the all-round development of students. The Integration Department provides English, Mathematics, Physics, Chemistry, Economics, Art, Chinese, Psychology, PE and other general courses for students who want to study in the QS top 80 global universities. It integrates IELTS, TOEFL, international competition, EPQ project-based courses and PBL project-based courses, aiming to lay a good language foundation for students and comprehensively improve their academic level. Enrich students' background and resume, and help students successfully enter the dream school!`

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={divisionImg} alt=''></Image>
        </div>
        <div className={styles.right}>
          <h2>Foxcroft Academy HSD</h2>
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
