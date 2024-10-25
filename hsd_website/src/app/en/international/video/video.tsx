'use client'
import React, { useState, useRef } from 'react'
import styles from './video.module.scss'
import Image from 'next/image'
import { Modal } from 'antd';

import videoImg from '../../../../../public/img/international/video.webp'

function Video() {

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
        <div className={styles.backImg}>
          <Image src={videoImg} alt=''></Image>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Foxcroft Academy G-11 Interviews with Chinese students</h2>
          </div>
          <div className={styles.introduce}>
            <p>Chen Haoyu, the Operation Principal of International Department of Huashengda Foreign Language School, came to Foxcroft Acadamy, a co-operative school, and interviewed the Chinese students studying in the school to listen to their real experiences and difficulties they encountered in Foxcroft Acadamy...</p>
          </div>
          <div className={styles.btn} onClick={() => openDialog()}>
            <div className={styles.triangular}></div>
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
                <source src='https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/10/25/507_260_1729755046(原视频).mp4' />
              </video>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Video
