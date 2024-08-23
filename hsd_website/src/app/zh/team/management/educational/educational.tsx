'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from './educational.module.scss'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'
import fetchRequest from '@/utils/fetchRequest';
import cardImg from '../../../../../../public/img/team/card.webp'

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function Educational() {
  SwiperCore.use([Navigation]);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const [data, setData] = useState([])
  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/people/queryAll', { teamId: 3 });
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            <h2>教研团队</h2>
            <p>Teaching & Research Team</p>
          </div>
          <div className={styles.btnGroup}>
            <button ref={prevBtn}><LeftOutlined /></button>
            <button ref={nextBtn}><RightOutlined /></button>
          </div>
        </div>
        <div className={styles.cardList}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={40}
            className={styles.swiperBox}
            onInit={(swiper: any) => {
              // 绑定自定义按钮
              console.log(swiper)
              swiper.params.navigation.prevEl = prevBtn.current;
              swiper.params.navigation.nextEl = nextBtn.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {
              data.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.picture}>
                      <Image src={item.photograph} alt={item.name} width={1000} height={1000} priority={true}></Image>
                    </div>
                    <div className={styles.card}>
                      <Image src={cardImg} alt=''></Image>
                      <div className={styles.people}>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                      </div>
                      <p className={styles.introduce}>{item.intro}</p>
                      <ul className={styles.honor}>
                        {
                          item.honors.map((i: any) => {
                            return (
                              <li key={i.id}>
                                {/* <span></span> */}
                                <p>{i.name}</p>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Educational
