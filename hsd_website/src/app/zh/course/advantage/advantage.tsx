'use client'
import React, { useState, useEffect } from 'react'
import styles from './advantage.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'
import { DoubleRightOutlined } from '@ant-design/icons';

import A2 from '../../../../../public/img/course/A2.webp'

function Advantage() {
  const [data, setData] = useState([])
  const [activeTwo, setActiveTwo] = useState()

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/course/queryAll', { language: 'CN' });
    setActiveTwo(res.data[0].id)
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>拓展课程</h2>
          <p>Extended Course</p>
        </div>
        <div className={styles.content_bottom}>
          <ul className={styles.lists}>
            {
              data.map((item: any, index: any) => {
                return (
                  <li key={item.id}
                    className={`${styles.list} ${item.id === activeTwo ? styles.activeList : ''}`}
                  >
                    <div className={styles.list_title} onClick={() => setActiveTwo(item.id)}>
                      <p>{item.name}</p>
                      <button className={styles.icon}>
                        <DoubleRightOutlined />
                      </button>
                    </div>
                    <div className={styles.list_content}>
                      <p className={styles.description}>{item.description}</p>
                      <ul>
                        {
                          item.advantages.map((i: any) => {
                            return (
                              <li key={i.id}>
                                <div className={styles.des_label}>
                                  <p>{i.name}:</p>
                                  <hr />
                                </div>
                                <p className={styles.des_value}>{i.details}</p>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className={styles.picture}>
            <Image src={A2} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage
