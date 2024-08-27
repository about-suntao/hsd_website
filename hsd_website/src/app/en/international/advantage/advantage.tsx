'use client'
import React, { useState, useRef } from 'react'
import styles from './advantage.module.scss'
import Image from 'next/image'
import { Modal } from 'antd';

import cardImg1 from '../../../../../public/img/international/school.webp'
import cardImg2 from '../../../../../public/img/international/fa.webp'
import cardImg3 from '../../../../../public/img/international/college.webp'
import iconImg1 from '../../../../../public/img/international/a1.webp'
import iconImg2 from '../../../../../public/img/international/a2.webp'
import iconImg3 from '../../../../../public/img/international/a3.webp'
import medalImg from '../../../../../public/img/international/medal.webp'

import linkImg from '../../../../../public/img/school/link.webp'


function Advantage() {

  const data = [
    {
      id: 1,
      icon: iconImg1,
      value: 'Highly recognised transcripts, graduation certificates, recommendation letters, etc, with obvious application advantages。',
    }, {
      id: 2,
      icon: iconImg2,
      value: "International students can apply to the world's leading universities in the US, UK, Australia, Canada, New Zealand and Hong Kong by virtue of their high quality US High School and international student background.",
    }, {
      id: 3,
      icon: iconImg3,
      value: "Compete with U.S. high school graduates and have a higher probability of applying to U.S. top schools.",
    },
  ]

  // 视频弹窗
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRefPc = useRef(null)

  const openDialog = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoRefPc.current) {
      let player: any = videoRefPc.current
      player.pause()
    }
  };

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.cardOne}>
          <div className={styles.picture}>
            <Image src={cardImg1} alt='' onClick={() => openDialog()}></Image>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h2>Advantages of College Admission</h2>
            </div>
            <ul>
              {
                data.map((item: any) => {
                  return (
                    <li key={item.id}>
                      <Image src={item.icon} alt=''></Image>
                      <p>{item.value}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className={styles.cardTwo}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h2>Introduction of Cooperative American High School</h2>
            </div>
            <div className={styles.introduce}>
              <p><span>Foxcroft Academy</span>, founded in 1823, is one of the TOP 10 boarding schools in Maine. FOXCroft Academy is a private boarding school with a rich history and a strong academic atmosphere.</p>
              <p>The school offers a diverse curriculum of up to 150 courses: 21 AP courses, 21 visual and performing arts courses, 24 technology education programmes, 5 foreign languages and 10 computer science courses.</p>
            </div>
            <button className={styles.link} onClick={() => openNewWindow('https://foxcroftacademy.org/fa-partnership-schools')}>
              <span>Partnership School</span>
              <Image src={linkImg} alt=''></Image>
            </button>
          </div>
          <div className={styles.picture}>
            <Image src={cardImg2} alt=''></Image>
          </div>
        </div>
        <div className={styles.cardThree}>
          <div className={styles.picture}>
            <Image src={cardImg3} alt=''></Image>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h2>Progression to Higher Education</h2>
            </div>
            <div className={styles.rate}>
              <Image src={medalImg} alt=''></Image>
              <h3>100% College-going Rate</h3>
            </div>
            <div className={styles.introduce}>
              <p>In the last five years, Foxcroft Academy graduates have received acceptance to many prestigious colleges and universities, including Princeton, MIT, Caltech, Yale, Northwestern, Smith College, Emory, UC Berkeley, UC Los Angeles, and USC.</p>
            </div>
          </div>
        </div>
        <div id="1" className={styles.videoDialog}>
          <Modal
            open={isModalOpen}
            getContainer={false}
            onCancel={handleCancel}
            title={null}
            footer={null}
            centered={true}
            keyboard={true}
            maskClosable={true}
          >
            <div className={styles.videoContent}>
              <video autoPlay controls loop ref={videoRefPc} id="1">
                <source src='https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/06/03/573_WeChat_20240601150452.mp4' />
              </video>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Advantage
