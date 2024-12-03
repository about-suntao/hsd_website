import React from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'

import tfImg1 from '../../../../../../public/img/school/tf1.webp'
import tfImg2 from '../../../../../../public/img/school/tf2.webp'
import tfImg3 from '../../../../../../public/img/school/tf3.webp'
import tfImg4 from '../../../../../../public/img/school/tf4.webp'
import tfImg5 from '../../../../../../public/img/school/tf5.webp'
import tfImg6 from '../../../../../../public/img/school/tf6.webp'


import rightImg from '../../../../../../public/img/school/right.webp'

function Feature() {
  const data = [
    {
      id: 1,
      title: 'Official Test Centre',
      serial: '01',
      desc: '',
      picture: tfImg1,
      tips: [
        { id: 1, label: 'Foxcroft Academy‘s Friendly School' },
        { id: 2, label: 'Edexcel Official Authorized Test Center' },
        { id: 4, label: 'UCAS Official Registration Center' },
        { id: 5, label: 'ASDAN International Science Competition Official Test Site' },
      ]
    }, {
      id: 2,
      title: 'International Competition Planning and Programmes',
      serial: '02',
      desc: 'International competitions test the overall ability of students and have become one of the essential documents for applying to prestigious universities.',
      picture: tfImg2,
      tips: [
        { id: 1, label: 'Helping students to plan for competitions' },
        { id: 2, label: 'Provide efficient pre-test guidance and training programmes for international competitions' },
        { id: 3, label: 'Comprehensively meet the needs of all kinds of high-quality competitions' },
      ]
    }, {
      id: 3,
      title: 'Institutional Management Model',
      serial: '03',
      desc: 'Strict management with a regular routine, helping students to improve their self-management skills and achieve better results in higher education.',
      picture: tfImg3,
      tips: []
    }, {
      id: 4,
      title: 'English Planning Enhancement',
      serial: '04',
      desc: '',
      picture: tfImg4,
      tips: [
        { id: 1, label: 'Arranging no less than 10 Chinese and foreign English lessons per week' },
        { id: 2, label: 'Providing public interest IELTS / TOEFL classes every Sunday afternoon' },
        { id: 3, label: 'Organizing English Debate Clubs' },
      ]
    }, {
      id: 5,
      title: 'Personalised Study Services',
      serial: '05',
      desc: 'Provide scientific and personalised one-on-one application planning guidance for each student, covering the whole academic year from the first to the third year of high school.',
      picture: tfImg5,
      tips: [
        { id: 1, label: 'Comprehensive assessment of academic performance, interests and strengths' },
        { id: 2, label: 'Customised application strategies and planning' },
        { id: 3, label: 'Counselling on school selection, essay writing and interview preparation' },
      ]
    }, {
      id: 6,
      title: 'Assessment Rules',
      serial: '06',
      desc: "Scientific assessment of academic performance, scientifically customised assessment system, full-time counselling to improve students' performance.",
      picture: tfImg6,
      tips: [
        { id: 1, label: 'Organizing monthly, mid-term and final exams to comprehensively assess academic performance.' },
        { id: 2, label: 'Comparing the results with the requirements of target universities and provide suggestions for strengthening the subjects.' },
        { id: 3, label: 'Strict assessment of each assignment to ensure quality teaching and learning' },
      ]
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
                      <p>{item.serial}</p>
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
                      <p>{item.serial}</p>
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
