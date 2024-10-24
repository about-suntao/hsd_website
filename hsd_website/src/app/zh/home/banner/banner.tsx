'use client'
import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


import cardImg1 from '../../../../../public/img/home/card1.webp'
import cardImg2 from '../../../../../public/img/home/card2.webp'
import cardImg3 from '../../../../../public/img/home/card3.webp'
import colon from '../../../../../public/img/home/colon.webp'

function Banner() {
  const router = useRouter()

  const handleRouter = () => {
    localStorage.getItem('user') ? router.push('/zh/dashboard') : router.push('/zh/login')
  }
  const data = [
    {
      id: 1,
      picture: cardImg1,
      title: '外语特色',
      titleEn: 'Foreign Language Features',
    }, {
      id: 2,
      picture: cardImg2,
      title: '文理兼容',
      titleEn: 'Integration of Arts and Sciences',
    }, {
      id: 3,
      picture: cardImg3,
      title: '合作办学',
      titleEn: 'School in Cooperation',
    }
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>华盛达外语学校融合部</h1>
          <p>Foxcroft Academy HSD</p>
        </div>
        <div className={styles.tips}>
          <Image className={styles.firstColon} src={colon} alt=''></Image>
          <Image className={styles.secondColon} src={colon} alt=''></Image>
          <p>华而实、盛之久、达天下</p>
        </div>
        <div className={styles.btn}>
          <button onClick={() => handleRouter()}>报名预约</button>
        </div>
        <div className={styles.card}>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <div className={styles.img}>
                      <Image src={item.picture} alt={item.title}></Image>
                    </div>
                    <div className={styles.label}>
                      <h3>{item.title}</h3>
                      <p>{item.titleEn}</p>
                    </div>
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

export default Banner
