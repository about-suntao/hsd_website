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
      title: '官方考点',
      serial: '01',
      desc: '',
      picture: tfImg1,
      tips: [
        { id: 1, label: 'Foxcroft Academy 友好学校' },
        { id: 2, label: 'Edexcel 官方授权考试中心' },
        { id: 4, label: 'UCAS官方注册中心' },
        { id: 5, label: 'ASDAN（阿思丹）国际理科竞赛官方考点' },
      ]
    }, {
      id: 2,
      title: '国际竞赛规划与课程',
      serial: '02',
      desc: '国际竞赛考验学生的综合能力，已成为申请名校必备的材料之一',
      picture: tfImg2,
      tips: [
        { id: 1, label: '帮助学生做好竞赛规划' },
        { id: 2, label: '提供高效的国际竞赛考前指导与培训课程' },
        { id: 3, label: '全面满足各类高含金量竞赛需求' },
      ]
    }, {
      id: 3,
      title: '严格教学落地',
      serial: '03',
      desc: '教学从入校即抓：设置雅思课程，下午补差或竞赛辅导，晚间课程查漏补缺。学科老师与助教共同确保学习效果落地，关注每位学生的全面成长。',
      picture: tfImg3,
      tips: []
    }, {
      id: 4,
      title: '英语规划提升',
      serial: '04',
      desc: '',
      picture: tfImg4,
      tips: [
        { id: 1, label: '安排每周不少于10节中方英语及外方英语课程' },
        { id: 2, label: '开设校内雅思课程' },
        { id: 3, label: '组织英语辩论社团' },
      ]
    }, {
      id: 5,
      title: '个性化升学服务',
      serial: '05',
      desc: '为每位学生提供科学个性化的申请规划指导，覆盖高一至高三全学段',
      picture: tfImg5,
      tips: [
        { id: 1, label: '全面评估学术成绩、兴趣特长' },
        { id: 2, label: '定制专属申请策略及升学规划方案' },
        { id: 3, label: '全程辅导选校、文书写作、面试准备' },
      ]
    }, {
      id: 6,
      title: '考评规则',
      serial: '06',
      desc: '科学评估学术表现，科学定制评估体系，全程辅导提升学生成绩。',
      picture: tfImg6,
      tips: [
        { id: 1, label: '组织周测、期中期末考试，全面评估学术表现' },
        { id: 2, label: '成绩对比目标大学要求，提供科目强化建议' },
        { id: 3, label: '重视每次作业严格评估，确保优质教学质量' },
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
