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
          <div className={styles.qrBox}>
            <div className={styles.qrCode}>
              <Image src={publicCode} alt=''></Image>
              <p>Public Number</p>
            </div>
            <div className={styles.qrCode}>
              <Image src={wxCode} alt=''></Image>
              <p>Enquiry</p>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Contacts</h2>
          <div className={styles.card}>
            <p>School Address</p>
            <div className={styles.cardBody}>
              <div className={styles.left}>
                <Image src={positionIcon} alt=''></Image>
              </div>
              <div className={styles.right}>
                <p>Deqing County, Huzhou City, Zhejiang Province</p>
                <p>No.1199 Maoyang Street, Wukang Street</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>Phone Number</p>
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
          <h2>Website Overview</h2>
          <p><Link href="/en/school/profile">School Profile</Link></p>
          <p><Link href="/en/course">Curriculum</Link></p>
          <p><Link href="/en/international">Cooperation</Link></p>
          <p><Link href="/en/team/management">Team</Link></p>
          <p><Link href="/en/campusClass">Campus</Link></p>
          <h2 className={styles.link}>Cooperation</h2>
          <p onClick={() => openNewWindow('http://www.hsdwyxx.com/dept/208.aspx')}>HuaShengDa Foreign Language School</p>
          <p onClick={() => openNewWindow('https://foxcroftacademy.org/fa-partnership-schools')}>Foxcroft College</p>
        </div>
        <div className={styles.news}>
          <h2>Information</h2>
          {
            newsData.map((item: any) => {
              return (
                <Link href={`/news/${item.id}`} key={item.id}>
                  <div className={styles.card} >
                    <div className={styles.card_left}>
                      <Image src={item.picture} alt='' width={400} height={400} priority></Image>
                    </div>
                    <div className={styles.card_right}>
                      <p>{item.title}</p>
                      <span>{item.createTime}</span>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
