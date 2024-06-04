'use client'
import React, { useState, useEffect } from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'


function Feature() {

  const [data, setData] = useState<any>([])
  const [active, setActive] = useState<any>({})

  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/teach/feature/queryAll');
    setData(res.data)
    setActive(res.data[0])
    setDataLoaded(true); // 设置数据已加载
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    dataLoaded &&
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>
            <p>School Teaching Characteristics</p>
            <h2>学校教学特色</h2>
          </div>
          <div className={styles.type}>
            <Image src={active.icon} alt='' width={100} height={100} priority ></Image>
            <p>{active.name}</p>
          </div>
          <div className={styles.desc}>
            <p>{active.description}</p>
          </div>
          <ul>
            {
              active.course.map((item: any) => {
                return (
                  <li key={item.id}>
                    <div className={styles.serial}>0{item.id}</div>
                    <div className={styles.label}>
                      <span>{item.name}</span>
                      <p>{item.description}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className={styles.picture}>
            <Image src={active.picture} alt='' width={1000} height={1000} priority ></Image>
          </div>
          <div className={styles.typeList}>
            <div className={styles.listBox}>
              {
                data.map((item: any) => {
                  return (
                    <div className={styles.list_card} key={item.id}>
                      <h3>{item.name}</h3>
                      <p>{item.englishName}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
