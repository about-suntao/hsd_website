'use client'
import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'
import { CheckCircleOutlined } from '@ant-design/icons';
import partnerImg from '../../../../../../public/img/school/partner.webp'
import schoolImg from '../../../../../../public/img/school/school.webp'
import linkImg from '../../../../../../public/img/school/link.webp'

function Introduce() {

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>HSD Foreign Language School</h2>
          </div>
          <div className={styles.article}>
            <p>Founded in 1996, Deqing Huashengda Foreign Language School was listed as a foreign language experimental school by the National Experimental Centre for Basic Education, and runs a school that integrates Chinese and Western civilisations, epitomising the development history of private education in Deqing County. The school carries out the Party's education policy in a comprehensive manner, and fosters future elites with an international outlook and the roots of Chinese culture.</p>
          </div>
          <button className={styles.link} onClick={() => openNewWindow('http://www.hsdwyxx.com/dept/208.aspx')}>
            <span>Partnership School</span>
            <Image src={linkImg} alt=''></Image>
          </button>
        </div>
        <div className={styles.right}>
          <Image src={schoolImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Introduce
