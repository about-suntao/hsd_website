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
      position: 'Director of Enrollment',
      serial: img1,
      honor: [
        {
          id: 1,
          label: 'Majoring in Civil Engineering at Zhejiang University'
        }, {
          id: 2,
          label: '10 years of experience in international education'
        }, {
          id: 3,
          label: '8 years of experience in international school enrollment, providing professional and efficient guidance to families studying abroad.'
        }
      ]
    }, {
      id: 2,
      name: 'Joy Chu',
      position: 'Head of School Office',
      serial: img2,
      honor: [
        {
          id: 1,
          label: 'Grade 8 English Major'
        }, {
          id: 2,
          label: 'Assist in coordinating the work of related departments in the school'
        }, {
          id: 3,
          label: `Good at developing individualized curriculum according to students' situation`
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
          <h2>Integrated operation center</h2>
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
