import React from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'

import mfImg1 from '../../../../../../public/img/school/mf1.webp'
import mfImg2 from '../../../../../../public/img/school/mf2.webp'
import mfImg3 from '../../../../../../public/img/school/mf3.webp'
import mfImg4 from '../../../../../../public/img/school/mf4.webp'


import rightImg from '../../../../../../public/img/school/right.webp'

function Feature() {
  const data = [
    {
      id: 1,
      title: 'Characteristic Club Activities',
      serial: '01',
      desc: "The club curriculum of the Integration Department adheres to the principle that students' wishes are the leading role, and the school provides full support.",
      descBottom: '',
      picture: mfImg1,
      tips: []
    }, {
      id: 2,
      title: 'Diversified Public Welfare Activities',
      serial: '02',
      desc: 'The campus organises a variety of public service activities on a regular basis to enrich the leisure time of students during weekends and holidays.',
      descBottom: '',
      picture: mfImg2,
      tips: [
        { id: 1, label: "Organise volunteer activities to cultivate students' collaborative skills and sense of social responsibility " },
        { id: 2, label: "Organise international organisation projects to broaden students' international horizons and enhance their leadership skills" },
        { id: 3, label: "Guide students to go out into the community to promote public participation and cultivate students' sense of public welfare。" },
      ]
    }, {
      id: 3,
      title: 'Whole-staff Mentorship',
      serial: '03',
      desc: '',
      descBottom: '',
      picture: mfImg3,
      tips: [
        { id: 1, label: 'Help students to analyse their academic strengths and learning abilities' },
        { id: 2, label: 'Define the requirements for further studies and the direction of study' },
        { id: 3, label: 'Determine the matching of language enhancement and background enhancement programmes' },
        { id: 4, label: 'Students and tutors make two-way choices' },
        { id: 6, label: 'Support in four areas: mood, subject performance, background enhancement, and guidance for further studies.' },

      ]
    }, {
      id: 4,
      title: 'Home-School Co-Education',
      serial: '04',
      desc: 'Student Monthly Feedback Forms are sent to parents at the end of each month, contains：',
      descBottom: "Parents' feedback on the student's behaviour and behavioural routines.",
      picture: mfImg4,
      tips: [
        { id: 1, label: 'Feedback and suggestions from subject teachers' },
        { id: 2, label: "Feedback from the class teacher on the student's academic performance and behaviour in school " },
        { id: 3, label: "Feedback from the living teacher on the student's life in the dormitory" },
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
                    <div className={styles.desc}>
                      <p>{item.descBottom}</p>
                    </div>
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
