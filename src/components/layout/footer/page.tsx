'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link';

import fetchRequest from '@/utils/fetchRequest';

import logo from '../../../../public/img/home/logowhite.webp'
import publicCode from '../../../../public/img/home/publicCode.webp'
import wxCode from '../../../../public/img/home/wxCode.webp'

import phoneIcon from '../../../../public/img/home/phone.webp'
import positionIcon from '../../../../public/img/home/position.webp'

function Footer() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/news/queryByPage?pageNum=1&pageSize=3');
    setNewsData(res.data.list)
  }

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.school}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo'></Image>
          </div>
          {/* <p className={styles.mark}>华而实、盛之久、达天下</p> */}
          <div className={styles.qrBox}>
            <div className={styles.qrCode}>
              <Image src={publicCode} alt=''></Image>
              <p>华盛达公众号</p>
            </div>
            <div className={styles.qrCode}>
              <Image src={wxCode} alt=''></Image>
              <p>报名咨询</p>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>联系方式</h2>
          <div className={styles.card}>
            <p>学校地址</p>
            <div className={styles.cardBody}>
              <div className={styles.left}>
                <Image src={positionIcon} alt=''></Image>
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
                <Image src={phoneIcon} alt=''></Image>
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
          <p><Link href="/school/profile">学校概况</Link></p>
          <p><Link href="/course">课程安排</Link></p>
          <p><Link href="/international">合作办学</Link></p>
          <p><Link href="/team/management">教研团队</Link></p>
          <p><Link href="/campusClass">校园风采</Link></p>
          <h2 className={styles.link}>合作办学</h2>
          <p onClick={() => openNewWindow('http://www.hsdwyxx.com/dept/208.aspx')}>华盛达外语学校官网</p>
          <p onClick={() => openNewWindow('https://foxcroftacademy.org/fa-partnership-schools')}>福克斯克罗夫特学院官网</p>
        </div>
        <div className={styles.news}>
          <h2>新闻资讯</h2>
          {
            newsData.map((item: any) => {
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.card_left}>
                    <Image src={item.picture} alt='' width={400} height={400} priority></Image>
                  </div>
                  <div className={styles.card_right}>
                    <p>{item.title}</p>
                    <span>{item.createTime}</span>
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
