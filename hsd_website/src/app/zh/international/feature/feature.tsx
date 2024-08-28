'use client'
import React, { useState, useEffect } from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function Feature() {

  const [data, setData] = useState<any>([])
  const [active, setActive] = useState<any>({})

  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/teach/feature/queryAll', { language: 'CN' });
    setData(res.data)
    setActive(res.data[0])
    setDataLoaded(true); // 设置数据已加载
  }

  const handleActive = (id: number) => {
    const arr = data.filter((item: any) => item.id === id)[0]
    setActive(arr)
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
          <div className={styles.left_content}>
            <div className={styles.type}>
              <Image src={active.icon} alt='' width={100} height={100} priority ></Image>
              <p>{active.name}</p>
            </div>
            <div className={styles.desc}>
              <p dangerouslySetInnerHTML={{ __html: active.description }}></p>
            </div>
            <ul>
              {
                active.course.map((item: any, index: number) => {
                  return (
                    <li key={item.id}>
                      <div className={styles.serial}>0{index + 1}</div>
                      <div className={styles.label}>
                        <p><span>{item.name}</span> : {item.description}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.picture}>
            <Image src={active.picture} alt='' width={1000} height={1000} priority ></Image>
          </div>
          <div className={styles.typeList}>
            <div className={styles.listBox}>
              {
                data.map((item: any) => {
                  return (
                    <div key={item.id}
                      className={`${styles.list_card} ${active.id === item.id ? styles.activeCard : ''}`}
                      onMouseEnter={() => handleActive(item.id)}>
                      <h3>{item.name}</h3>
                      <p>{item.englishName}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.title}>
            <p>School Teaching Characteristics</p>
            <h2>学校教学特色</h2>
          </div>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            spaceBetween={10}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              data.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.picture}>
                      <Image src={item.picture} alt='' width={1000} height={1000} priority ></Image>
                    </div>
                    <div className={styles.type}>
                      <Image src={item.icon} alt='' width={100} height={100} priority ></Image>
                      <p>{item.name}</p>
                    </div>
                    <div className={styles.desc}>
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                    <ul>
                      {
                        item.course.map((i: any, index: number) => {
                          return (
                            <li key={i.id}>
                              <div className={styles.serial}>0{index + 1}</div>
                              <div className={styles.label}>
                                <p><span>{i.name}</span> : {i.description}</p>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default Feature
