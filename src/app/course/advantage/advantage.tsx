'use client'
import React, { useState, useEffect } from 'react'
import styles from './advantage.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'
import { DoubleRightOutlined } from '@ant-design/icons';

import A1 from '../../../../public/img/course/A1.png'
import A2 from '../../../../public/img/course/A2.png'

function Advantage() {
  const [data, setData] = useState([])
  const [active, setActive] = useState()
  const [activeTwo, setActiveTwo] = useState()


  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/course/queryAll');
    setActive(res.data[0].id)
    setActiveTwo(res.data[3].id)
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>课程优势</h2>
          <p>Class Advantages</p>
        </div>
        <div className={styles.content_top}>
          <div className={styles.picture}>
            <Image src={A1} alt=''></Image>
          </div>
          <ul className={styles.lists}>
            {
              data.slice(0, 3).map((item: any) => {
                return (
                  <li key={item.id}
                    className={`${styles.list} ${item.id === active ? styles.activeList : ''}`}
                  >
                    <div className={styles.list_title} onMouseEnter={() => setActive(item.id)}>
                      <p>{item.id}.{item.name}</p>
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
        </div>
        <div className={styles.content_bottom}>
          <ul className={styles.lists}>
            {
              data.slice(3, 8).map((item: any) => {
                return (
                  <li key={item.id}
                    className={`${styles.list} ${item.id === activeTwo ? styles.activeList : ''}`}
                  >
                    <div className={styles.list_title} onMouseEnter={() => setActiveTwo(item.id)}>
                      <p>{item.id}.{item.name}</p>
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
