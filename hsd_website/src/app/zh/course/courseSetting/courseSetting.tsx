import React from 'react'
import styles from './courseSetting.module.scss'
import Image from 'next/image'

import A1 from '../../../../../public/img/course/A1.webp'

function CourseSetting() {

  const data = [
    {
      id: 1,
      title: 'G9-G10年级',
      list: [
        {
          id: 1,
          label: '通过英语(ESL/EFL)、数学、物理、化学、经济、艺术、中文、心理、PE、雅思等通识衔接课程的学习，引导了解自己的学科兴趣和优势，筛选未来意向专业，并确定G11年级方向选择'
        }, {
          id: 2,
          label: '基础学术竞赛+领导力活动'
        }, {
          id: 3,
          label: '建立大学申请规划概念'
        },
      ]
    },
    {
      id: 2,
      title: 'G11年级',
      list: [
        {
          id: 1,
          label: '选择4-5门融合课程的专业化学习，通过全球官方考试，确定未来专业方向和留学目的地'
        }, {
          id: 2,
          label: '雅思、托福或其他语言标化成绩考试'
        }, {
          id: 3,
          label: '参加高阶竞赛和夏校活动'
        },
      ]
    },
    {
      id: 3,
      title: 'G12年级',
      list: [
        {
          id: 1,
          label: '完成融合课程学习，有能力的学生可选择完成EPQ/IPQ项目，递交大学申请'
        }, {
          id: 2,
          label: '通过融合课程剩余模块考试，获得完整成绩'
        }, {
          id: 3,
          label: '雅思、托福的最后冲刺'
        },
      ]
    }
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>课程设置</h2>
          <p>Course Setting</p>
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
