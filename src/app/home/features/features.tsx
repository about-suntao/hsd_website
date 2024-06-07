import React from 'react'
import styles from './features.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'



async function getData() {
  const res = await fetchRequest.get('/icon/web/feature/queryAll');
  return {
    data: res.data,
  }
}

async function Features() {
  const { data } = await getData()
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>办学特色</h2>
          <p>Educational Features</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.card_left}>
                    <Image src={item.picture} alt={item.title} width={400} height={400} priority></Image>
                  </div>
                  <div className={styles.card_right}>
                    <div className={styles.card_title}>
                      <p>{item.name}</p>
                      <span>{item.englishName}</span>
                    </div>
                    <div className={styles.label}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Features
