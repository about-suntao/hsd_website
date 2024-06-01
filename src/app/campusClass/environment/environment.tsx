'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './environment.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'


import IconImg from '../../../../public/img/campusClass/icon.png'

SwiperCore.use([Navigation]);

function Environment() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [typeList, setTypeList] = useState([])
  const [pictureList, setPictureList] = useState([])
  const [activeType, setActiveType] = useState(0)



  const getType = async () => {
    const res = await fetchRequest.get('/icon/web/environment/type/queryByPage');
    getPicture(res.data[0].id)
    setActiveType(res.data[0].id)
    setTypeList(res.data)
  }

  const getPicture = async (id: any) => {
    const res = await fetchRequest.get('/icon/web/environment/queryAll', { typeId: id });
    setPictureList(res.data)
  }

  const changeType = (id: number) => {
    getPicture(id)
    setActiveType(id)
  }

  useEffect(() => {
    getType()
  }, []);

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.title_left}>
            <div className={styles.icon}>
              <Image src={IconImg} alt=''></Image>
            </div>
            <div className={styles.titleBox}>
              <h2>学校环境</h2>
              <p>School Environment</p>
            </div>
          </div>
          <div className={styles.changeBtn}>
            <button ref={prevRef}><LeftOutlined /></button>
            <button ref={nextRef}><RightOutlined /></button>
          </div>
        </div>
        <div className={styles.environment}>
          <div className={styles.type}>
            <ul>
              {
                typeList.map((item: any) => {
                  return (
                    <li key={item.id}
                      className={`${activeType === item.id ? styles.activeType : ''}`}
                      onClick={() => changeType(item.id)}
                    >
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.picture}>
            <Swiper
              slidesPerView='auto'
              spaceBetween={22}
              className={styles.swiperBox}
              onInit={(swiper: any) => {
                // 绑定自定义按钮
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {
                pictureList.map((item: any) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className={styles.card_img}>
                        <Image src={item.picture} alt='' width={1000} height={1000} priority={true}></Image>
                      </div>
                      <div className={styles.card_title}>
                        <div className={styles.title_shadow}>
                          {item.name}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Environment
