import React from 'react'
import styles from './recruitment.module.scss'

import Image from 'next/image'

import recruitmentImg1 from '../../../../../public/img/joinUs/recruitment.webp'
import recruitmentImg2 from '../../../../../public/img/joinUs/recruitmentTitle.webp'
import recruitmentImg3 from '../../../../../public/img/joinUs/book.webp'
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

function Recruitment() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={recruitmentImg1} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <div className={styles.titleLogo}>
              <Image src={recruitmentImg2} alt=''></Image>
            </div>
            <div className={styles.titleText}>
              <p>Recruitment Positions (Including Reserves)</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              <Image src={recruitmentImg3} alt=''></Image>
              <p>Academic Subjects</p>
            </div>
            <ListItem value="Bilingual Economics Teacher"></ListItem>
            <ListItem value="Bilingual Chemistry Teacher"></ListItem>
            <ListItem value="Bilingual Physics Teacher"></ListItem>
            <hr />
            <ListItem value="Bilingual Math Teacher (Reserve) "></ListItem>
            <ListItem value="ESL Teacher (Reserve)"></ListItem>
          </div>
          <div className={styles.schoolLogo}>
            <Image src={schoolLogo} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruitment
