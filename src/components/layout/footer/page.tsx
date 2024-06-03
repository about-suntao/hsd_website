import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';

import logo from '../../../../public/img/home/logowhite.png'
import publicCode from '../../../../public/img/home/publicCode.jpg'
import wxCode from '../../../../public/img/home/wxCode.jpg'

import img1 from '../../../../public/img/home/test.webp'

function Footer() {
  const newsData = [
    {
      id: 1,
      img: img1,
      title: '用铁纪铸我风采 以军魂耀我青春',
      time: '2023-09-01',
    },
    {
      id: 2,
      img: img1,
      title: '青衿鸿鹄同风志 展翅寰宇万里云',
      time: '2023-06-25',
    },
    {
      id: 3,
      img: img1,
      title: '军风巍巍淬青春 英姿飒爽致芳华',
      time: '2023-02-26',
    },
  ]

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.school}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo'></Image>
          </div>
          <p className={styles.mark}>华而实、盛之久、达天下</p>
          <div className={styles.qrBox}>
            <div className={styles.qrCode}>
              <Image src={publicCode} alt=''></Image>
              <p>华盛达公众号</p>
            </div>
            <div className={styles.qrCode}>
              <Image src={wxCode} alt=''></Image>
              <p>招生咨询号</p>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>联系方式</h2>
          <div className={styles.card}>
            <p>学校地址</p>
            <div className={styles.cardBody}>
              <div className={styles.left}>
                <EnvironmentFilled />
              </div>
              <div className={styles.right}>
                <p>浙江省湖州市德清县</p>
                <p>武康街道舞阳街1199号</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>联系电话</p>
            <div className={styles.cardBody}>
              <div className={styles.left}>
                <PhoneFilled />
              </div>
              <div className={styles.right}>
                <p>0572-8668963</p>
                <p>18657221120 (余老师)</p>
                <p>15700173603 (王老师)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.situation}>
          <h2>网站概况</h2>
          <p>关于我们</p>
          <p>教育教学</p>
          <p>校园生活</p>
          <p>新闻资讯</p>
          <p>招生咨询</p>
        </div>
        <div className={styles.news}>
          <h2>新闻资讯</h2>
          {
            newsData.map((item) => {
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.card_left}>
                    <Image src={item.img} alt=''></Image>
                  </div>
                  <div className={styles.card_right}>
                    <p>{item.title}</p>
                    <span>{item.time}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
