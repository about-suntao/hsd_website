import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'
import { CheckCircleOutlined } from '@ant-design/icons';
import partnerImg from '../../../../../public/img/school/partner.webp'
import schoolImg from '../../../../../public/img/school/school.webp'

function Introduce() {
  const data = [
    {
      id: 1,
      label: 'Edexcel官方授权考试中心',
    }, {
      id: 2,
      label: '美高AP授权学校',
    }, {
      id: 3,
      label: 'ASDAN（阿思丹）国际理科竞赛官方考点',
    }, {
      id: 4,
      label: 'UCAS 官方注册中心',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>华盛达外语学校</h2>
            <p>HSD Foreign Language School</p>
          </div>
          <div className={styles.article}>
            <p>德清县华盛达外语学校创建于1996年，被国家基础教育实验中心列为外语实验学校，并融合中西文明而办学，是德清县民办教育发展史的缩影。学校全面贯彻党的教育方针，培养兼具国际视野和中国文化根基的未来精英。</p>
          </div>
          <div className={styles.partner}>
            <Image src={partnerImg} alt=''></Image>
            <p>Foxcroft Academy官方合作伙伴</p>
          </div>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <CheckCircleOutlined />
                    <p>{item.label}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles.right}>
          <Image src={schoolImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Introduce
