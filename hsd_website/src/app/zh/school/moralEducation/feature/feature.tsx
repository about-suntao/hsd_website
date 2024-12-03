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
      title: '特色社团活动',
      serial: '01',
      desc: '融合部社团课程秉承原则：以学生意愿为主导，学校全力提供支持。',
      descBottom: '',
      picture: mfImg1,
      tips: []
    }, {
      id: 2,
      title: '多元公益活动',
      serial: '02',
      desc: '校园联合社会定期组织各类丰富多彩的公益活动，充实每个周末和假期的业余时间。',
      descBottom: '',
      picture: mfImg2,
      tips: [
        { id: 1, label: '组织各类志愿者活动，培养学生协作能力和社会责任感' },
        { id: 2, label: '举办国际组织项目，拓宽国际视野，提升学生领导能力' },
        { id: 3, label: '引导学生走入社会，促进公共参与，培养学生公益意识' },
      ]
    }, {
      id: 3,
      title: '全员导师制',
      serial: '03',
      desc: '',
      descBottom: '',
      picture: mfImg3,
      tips: [
        { id: 1, label: '帮助学生分析学科优势、学习能力' },
        { id: 2, label: '明确升学要求和专业方向' },
        { id: 3, label: '确定语言提升、背景提升方案匹配' },
        { id: 4, label: '学生和导师双向选择' },
        { id: 6, label: '从心情情绪、学科成绩、背景提升、升学指导四方面展开帮扶' },
      ]
    }, {
      id: 4,
      title: '学校共育',
      serial: '04',
      desc: '学生月度情况反馈表在每月末发送给家长，包含：',
      descBottom: '便于家长及时且真实的综合了解学生在校情况',
      picture: mfImg4,
      tips: [
        { id: 1, label: '学科老师的反馈及建议' },
        { id: 2, label: '班主任对学生在校学业情况和行为常规的综合评价' },
        { id: 3, label: '生活老师的宿舍生活情况反馈' },
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
