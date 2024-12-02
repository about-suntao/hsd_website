import React from 'react'
import styles from './operation.module.scss'
import Image from 'next/image'

import img1 from '../../../../../../public/img/team/01.png'
import img2 from '../../../../../../public/img/team/02.png'
import bannerImg from '../../../../../../public/img/team/backImg.png'


function Operation() {

  const data = [
    {
      id: 1,
      name: 'Fiona Zhao',
      position: '招生主任',
      serial: img1,
      honor: [
        {
          id: 1,
          label: '浙江大学土木工程专业'
        }, {
          id: 2,
          label: '10年国际教育行业经验'
        }, {
          id: 3,
          label: '8年国际学校招生经验，为留学家庭提供专业且高效的指导'
        }
      ]
    }, {
      id: 2,
      name: 'Joy Chu',
      position: '校办主任',
      serial: img2,
      honor: [
        {
          id: 1,
          label: '英语专业八级'
        }, {
          id: 2,
          label: '协助协调学校相关部门的工作事宜'
        }, {
          id: 3,
          label: '擅长根据学生情况制定个性化课程体系'
        }
      ]
    }
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.backImg}>
        <Image src={bannerImg} alt=''></Image>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>综合运营中心</h2>
          <p>Integrated operation center</p>
        </div>
        <div className={styles.cardBox}>
          {
            data.map((item: any) => {
              return (
                <div key={item.id} className={styles.card}>
                  <hr />
                  <div className={styles.card_body}>
                    <div className={styles.serial}>
                      <Image src={item.serial} alt=''></Image>
                    </div>
                    <div className={styles.cardTitle}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.position}>{item.position}</p>
                    </div>
                    <ul className={styles.intr}>
                      {
                        item.honor.map((i: any) => {
                          return (
                            <li key={i.id}>{i.label}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <hr />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Operation
