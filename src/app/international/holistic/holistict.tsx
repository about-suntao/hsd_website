import React from 'react'
import styles from './holistic.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest';

async function getData() {
  const res = await fetchRequest.get('/icon/web/education/queryAll');
  return {
    data: res.data,
  }
}

async function Holistict() {
  const { data } = await getData()
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Holistic Education</p>
          <h2>全人教育</h2>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <Image src={item.picture} alt='' width={400} height={800} priority></Image>
                  <div className={styles.mask}></div>
                  <div className={styles.introduce}>
                    <p className={styles.serial}>0{item.id}</p>
                    <p className={styles.title}>{item.name}</p>
                    <p className={styles.desc}> {item.description}</p>
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

export default Holistict
