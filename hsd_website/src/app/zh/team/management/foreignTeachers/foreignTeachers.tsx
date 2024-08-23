'use client'
import React, { useState, useEffect } from 'react'
import styles from './foreignTeachers.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import fetchRequest from '@/utils/fetchRequest';

import quotationMark from '../../../../../../public/img/team/icon.png'
import honorLogo from '../../../../../../public/img/team/honor_logo.png'

function CarouselBox(props: any) {
  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/people/queryAll', { teamId: 2 });
    setDataLoaded(true); // 设置数据已加载
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <Swiper
      slidesPerView={props.cardRenderNum}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        data.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.PcCard}>
                <div className={styles.details_left}>
                  <Image src={item.photograph} alt={item.name} width={800} height={800} priority></Image>
                </div>
                <div className={styles.details_right}>
                  <div className={styles.name}>
                    <p>{item.name}</p>
                    <Image src={quotationMark} alt=''></Image>
                  </div>
                  <div className={styles.honor}>
                    <div className={styles.h_left}>
                      {
                        item.honors.map((i: any) => {
                          return (
                            <div key={i.id} className={styles.tips}>
                              <Image src={honorLogo} alt=''></Image>
                              <p >{i.name}</p>
                              <Image src={honorLogo} alt=''></Image>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className={styles.h_right}>
                      <Image src={item.signature} width={400} height={400} priority alt=''></Image>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.introduce}>
                    <span>{item.intro}</span>
                  </div>
                  <div className={styles.serial}>
                    <Image src={item.icon} width={400} height={400} priority alt=''></Image>
                  </div>
                </div>
              </div>
              <div className={styles.MobileCard}>
                <div className={styles.details_top}>
                  <div className={styles.d_t_l}>
                    <Image src={item.photograph} alt={item.name} width={600} height={600} priority></Image>
                  </div>
                  <div className={styles.d_t_c}>
                    <div className={styles.name}>
                      <p>{item.name}</p>
                    </div>
                    <div className={styles.honor}>
                      {
                        item.honors.map((i: any) => {
                          return (
                            <div key={i.id} className={styles.tips}>
                              <Image src={honorLogo} alt=''></Image>
                              <p >{i.name}</p>
                              <Image src={honorLogo} alt=''></Image>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className={styles.d_t_r}>
                    <Image src={quotationMark} alt=''></Image>
                    <hr />
                    <Image src={item.icon} width={400} height={400} alt=''></Image>
                  </div>
                </div>
                <div className={styles.details_bottom}>
                  <div className={styles.introduce}>
                    <span>{item.intro}</span>
                  </div>
                  <div className={styles.signature}>
                    <Image src={item.signature} width={400} height={400} alt=''></Image>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

function ForeignTeachers() {

  const [cardNum, setCardNum] = useState(2)

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.body.offsetWidth + 17)
    // 监屏幕宽度
    window.addEventListener("resize", () => setWindowWidth(document.body.offsetWidth + 17))
    // 销毁
    return () => window.removeEventListener("resize", () => setWindowWidth(0));
  }, []);

  useEffect(() => {
    // 根据屏幕宽度改变swiper 显示数量
    windowWidth >= 1601 ? setCardNum(2) : setCardNum(1)
  }, [windowWidth])

  return (
    <div className={styles.teacher}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>外方导师</h2>
          <h3>Foreign Tutor</h3>
        </div>
        <CarouselBox cardRenderNum={cardNum}></CarouselBox>
      </div>
    </div>
  )
}

export default ForeignTeachers
