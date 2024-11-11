import React from 'react'
import styles from './courseSetting.module.scss'
import Image from 'next/image'

import A1 from '../../../../../public/img/course/A1.webp'

function CourseSetting() {

  const data = [
    {
      id: 1,
      title: 'Grades 9-10',
      list: [
        {
          id: 1,
          label: 'Through the study of English (ESL/EFL), Mathematics, Physics, Chemistry, Economics, Art, Chinese, Psychology, PE, IELTS and other general articulation courses, we will be guided to understand our own disciplinary interests and strengths, to screen our future intended majors and to determine the direction to choose in G11'
        }, {
          id: 2,
          label: 'Basic academic competitions + leadership activities'
        }, {
          id: 3,
          label: 'Establish the concept of college application planning'
        },
      ]
    },
    {
      id: 2,
      title: 'Grade 11',
      list: [
        {
          id: 1,
          label: 'Specialization in 4-5 integration courses, passing official global exams to determine future major direction and study destination'
        }, {
          id: 2,
          label: 'IELTS, TOEFL or other standardized language tests'
        }, {
          id: 3,
          label: 'Participate in high-level competitions and summer school activities'
        },
      ]
    },
    {
      id: 3,
      title: 'Grade 12',
      list: [
        {
          id: 1,
          label: 'Completion of the Integrated Curriculum, with the option of completing the EPQ/IPQ program for those who are able to do so, and submitting university applications'
        }, {
          id: 2,
          label: 'Pass the remaining module exams of the Fusion Program for full grades'
        }, {
          id: 3,
          label: 'IELTS and TOEFL high score in final sprint'
        },
      ]
    }
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Course Setting</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image src={A1} alt=''></Image>
          </div>
          <div className={styles.right}>
            <ul>
              {
                data.map((item: any) => {
                  return (
                    <li key={item.id}>
                      <div className={styles.cardTitle}>
                        <p>{item.title}</p>
                      </div>
                      <div className={styles.cardList}>
                        {
                          item.list.map((child: any) => {
                            return (
                              <div className={styles.list} key={child.id}>
                                <div className={styles.point}>
                                  <span></span>
                                </div>
                                <div className={styles.label}>
                                  {child.label}
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSetting
