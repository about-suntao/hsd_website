import React from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'

import tfImg1 from '../../../../../public/img/school/tf1.webp'
import tfImg2 from '../../../../../public/img/school/tf2.webp'
import tfImg3 from '../../../../../public/img/school/tf3.webp'
import tfImg4 from '../../../../../public/img/school/tf4.webp'

import serial1 from '../../../../../public/img/school/01.webp'
import serial2 from '../../../../../public/img/school/02.webp'
import serial3 from '../../../../../public/img/school/03.webp'
import serial4 from '../../../../../public/img/school/04.webp'

import rightImg from '../../../../../public/img/school/right.webp'

function Feature() {
  const data = [
    {
      id: 1,
      title: '官方考点',
      serial: serial1,
      desc: '',
      picture: tfImg1,
      tips: [
        { id: 1, label: 'Foxcroft Academy 官方合作伙伴' },
        { id: 2, label: 'Edexcel 官方授权考试中心' },
        { id: 3, label: '美高AP授权学校' },
        { id: 4, label: 'UCAS官方注册中心' },
      ]
    }, {
      id: 2,
      title: '国际竞赛规划与课程',
      serial: serial2,
      desc: '国际竞赛考验学生的综合能力，已成为申请名校必备的材料之一',
      picture: tfImg2,
      tips: [
        { id: 1, label: '帮助学生做好竞赛规划' },
        { id: 2, label: '提供高效的国际竞赛考前指导与培训课程' },
        { id: 3, label: '全面满足各类高含金量竞赛需求' },
      ]
    }, {
      id: 3,
      title: '个性化升学服务',
      serial: serial3,
      desc: '为每位学生提供一对一科学个性的申请规划指导，覆盖高一至高三全学段',
      picture: tfImg3,
      tips: []
    }, {
      id: 4,
      title: '体制内管理模式',
      serial: serial4,
      desc: '作息规律，管理严格，帮助学生提高自主管理能力，力求更好的升学结果',
      picture: tfImg4,
      tips: []
    },
  ]
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        {
          data.map((item: any, index: number) => {
            return index % 2 === 0 ? (
              <div className={styles.card} key={item.id}>
                <div className={styles.content}>
                  <div className={styles.list}>
                    <div className={styles.title}>
                      <Image src={item.serial} alt=''></Image>
                      <h2>{item.title}</h2>
                    </div>
                    <div className={styles.desc}>
                      <p>{item.desc}</p>
                    </div>
                    {
                      item.tips.length !== 0 &&
                      <ul>
                        {
                          item.tips.map((i: any) => {
                            return (
                              <li key={i.id}>
                                <div className={styles.right}>
                                  <Image src={rightImg} alt=''></Image>
                                </div>
                                <p>{i.label}</p>
                              </li>
                            )
                          })
                        }
                      </ul>
                    }
                  </div>
                </div>
                <div className={styles.picture}>
                  <Image src={item.picture} alt=''></Image>
                </div>
              </div>
            ) : (
              <div className={styles.card} key={item.id}>
                <div className={styles.pcPicture}>
                  <Image src={item.picture} alt=''></Image>
                </div>
                <div className={styles.content}>
                  <div className={styles.list}>
                    <div className={styles.title}>
                      <Image src={item.serial} alt=''></Image>
                      <h2>{item.title}</h2>
                    </div>
                    <div className={styles.desc}>
                      <p>{item.desc}</p>
                    </div>
                    {
                      item.tips.length !== 0 &&
                      <ul>
                        {
                          item.tips.map((i: any) => {
                            return (
                              <li key={i.id}>
                                <div className={styles.right}>
                                  <Image src={rightImg} alt=''></Image>
                                </div>
                                <p>{i.label}</p>
                              </li>
                            )
                          })
                        }
                      </ul>
                    }
                  </div>
                </div>
                <div className={styles.mobilePicture}>
                  <Image src={item.picture} alt=''></Image>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feature
