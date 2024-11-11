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
              <p>Position Requirements</p>
            </div>
          </div>
          <div className={styles.content}>
            <ListItem value="Bachelor's degree or above, majoring in the relevant subjects for each subject teaching position, English proficiency at or above Specialized Grade 8 level, fluent in spoken English, able to communicate without barriers, overseas study experience is preferred;"></ListItem>
            <ListItem value="Understand the knowledge structure system of related subjects, and be able to teach in pure English for related subjects; solid basic professional skills;"></ListItem>
            <ListItem value="Have a certain understanding of International courses, 3 years or more teaching experience in related courses is preferred;"></ListItem>
            <ListItem value="Passionate about teaching, good at expression, lively and contagious in lectures; broad knowledge reserve; love the education career, have good affinity; work proactively, strong sense of responsibility."></ListItem>
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
