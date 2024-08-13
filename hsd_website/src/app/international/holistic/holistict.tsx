'use client'
import React, { useState, useEffect } from 'react'
import styles from './holistic.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest';


function Holistict() {

  const [data, setData] = useState([])
  const [active, setActive] = useState<any>({})


  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/education/queryAll');
    setActive(res.data[0].id)
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Holistic Education</p>
          <h2>全人教育</h2>
        </div>
        <ul>
          {
            data.map((item: any, index: number) => {
              return (
                <li key={item.id}
                  className={`${active === item.id ? styles.active : ''}`}
                  onMouseEnter={() => setActive(item.id)}>
                  <Image src={item.picture} alt='' width={400} height={800} priority></Image>
                  <div className={styles.mask}></div>
                  <div className={styles.introduce}>
                    <p className={styles.serial}>0{index + 1}</p>
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
