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
      title: 'Rigorous Teaching to the Ground',
      serial: '03',
      desc: 'Teaching starts from the moment you enter the school: we offer IELTS courses, afternoon tutorials for remedial work or competitions, and evening classes for checking for deficiencies. Subject teachers and teaching assistants work together to ensure that the learning effect is realized, focusing on the overall growth of each student.',
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
        { id: 2, label: 'Provide on-campus IELTS courses' },
        { id: 3, label: 'Organizing English Debate Clubs' },
      ]
    }, {
      id: 5,
      title: 'Personalised Study Services',
      serial: '05',
      desc: 'Provide scientific and personalized application planning guidance for each student, covering the whole school year from freshman to senior.',
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
        { id: 1, label: '' },
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
