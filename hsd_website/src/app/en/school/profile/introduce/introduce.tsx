'use client'
import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'
import { CheckCircleOutlined } from '@ant-design/icons';
import partnerImg from '../../../../../../public/img/school/partner.webp'
import schoolImg from '../../../../../../public/img/school/school.webp'
import linkImg from '../../../../../../public/img/school/link.webp'

function Introduce() {

  const str = `Deqing Huashengda Foreign Language School integrates Chinese and Western civilizations and runs a school that fully implements the Party's education policy to cultivate future elites with both an international outlook and Chinese cultural roots.`

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
            <p>{str}</p>
          </div>
          <button className={styles.link} onClick={() => openNewWindow('http://www.hsdwyxx.com')}>
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
