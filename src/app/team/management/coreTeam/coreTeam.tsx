'use client'
import React, { useState, useEffect } from 'react'
import styles from './coreTeam.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import arrow from '../../../../../public/img/team/arrow.png'

function CoreTeam() {
  const [data, setData] = useState<any>([])
  const [active, setActive] = useState<any>({})

  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/people/queryAll', { teamId: 1 });
    setData(res.data)
    setActive(res.data[0])
    setDataLoaded(true); // 设置数据已加载
  }

  useEffect(() => {
    getData()
  }, []);

  const changeActive = () => {
    const arr = data
    let firstItem = arr.shift();
    arr.push(firstItem);
    setActive(arr[0])
    setData(arr)
  }

  const changeActiveId = (id: number) => {
    const arr = data
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      const frontItems = arr.splice(0, index);
      const currentItem = arr.shift();
      arr.push(...frontItems);
      arr.unshift(currentItem);
    }
    setActive(arr[0])
    setData(arr)
  }

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>核心管理团队</h2>
          <p>Core management team</p>
        </div>
        <div className={styles.card}>
          <div className={styles.left}>
            <Image src={active.photograph} alt={active.name} width={1000} height={1000} priority />
            <div className={styles.icon} onClick={() => changeActive()}>
              <Image src={arrow} alt=''></Image>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_title}>
              <div className={styles.name}>
                <p>{active.position}</p>
                <p>{active.name}</p>
              </div>
              <hr />
            </div>
            <div className={styles.honor}>
              {
                active.honors.map((item: any) => {
                  return (
                    <p key={item.id}>
                      {item.name}
                    </p>
                  )
                })
              }
            </div>
            <ul className={styles.lists}>
              {
                data.map((item: any) => {
                  return (
                    <li key={item.id} onClick={() => changeActiveId(item.id)}>
                      <Image src={item.photograph} alt={item.name} width={200} height={200} priority />
                      <div className={styles.position}>
                        <p>{item.position}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>
          <h2>核心管理团队</h2>
          <p>Core management team</p>
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
                  <div className={styles.card}>
                    <Image src={item.photograph} width={600} height={600} priority alt=''></Image>
                    <div className={styles.card_c}>
                      <div className={styles.right_title}>
                        <div className={styles.name}>
                          <p>{item.position}</p>
                          <p>{item.name}</p>
                        </div>
                        <hr />
                      </div>
                      <div className={styles.honor}>
                        {
                          item.honors.map((i: any) => {
                            return (
                              <p key={i.id}>
                                {i.name}
                              </p>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default CoreTeam


