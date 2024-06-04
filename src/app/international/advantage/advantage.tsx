'use client'
import React, { useState, useRef } from 'react'
import styles from './advantage.module.scss'
import Image from 'next/image'
import { Modal } from 'antd';


import cardImg1 from '../../../../public/img/international/schoolVideo.png'
import cardImg2 from '../../../../public/img/international/fa.png'
import cardImg3 from '../../../../public/img/international/college.png'

import iconImg1 from '../../../../public/img/international/a1.png'
import iconImg2 from '../../../../public/img/international/a2.png'
import iconImg3 from '../../../../public/img/international/a3.png'
import medalImg from '../../../../public/img/international/medal.png'

function Advantage() {

  const data = [
    {
      id: 1,
      icon: iconImg1,
      value: '成绩单、毕业证、推荐信等认可程度高，申请优势明显',
    }, {
      id: 1,
      icon: iconImg2,
      value: '国际部学生凭借优质美高学籍与国际生背景，顺利申请美、英、澳、加、新及中国香港地区的世界一流大学',
    }, {
      id: 1,
      icon: iconImg3,
      value: '可与美国本土高中毕业生同台竞争，且成绩优异者有更高概率申请到美国藤校',
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

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.cardOne}>
          <div className={styles.picture}>
            <Image src={cardImg1} alt='' onClick={() => openDialog()}></Image>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <p>Advantages of College Admission</p>
              <h2>美高学籍优势</h2>
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
              <p>Introduction to cooperative American high schools</p>
              <h2>合作办学美高介绍</h2>
            </div>
            <div className={styles.introduce}>
              <p><span>Foxcroft Academy</span>（福克斯克罗夫特学院）成立于1823年，摘得美国缅因州TOP 10寄宿学校的桂冠。是一所历史悠久、学术氛围浓郁的私立寄宿学校。</p>
              <p>学校提供多达150门多元化的课程：包括21门AP课程，21门视觉和表演艺术课程，24个科技教育项目，5门外语和10门计算机科学课程等。</p>
            </div>
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
              <p>College Admission Outcomes</p>
              <h2>升学情况</h2>
            </div>
            <div className={styles.rate}>
              <Image src={medalImg} alt=''></Image>
              <h3>大学升学率100%</h3>
            </div>
            <div className={styles.introduce}>
              <p>近五年来，Foxcroft Academy的毕业生收到了包括普林斯顿大学、麻省理工大学、加州理工大学、耶鲁大学、西北大学、史密斯学院、埃默里大学、加州大学伯克利、加州大学洛杉矶、南加州大学等在内的多所知名高校录取。</p>
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
