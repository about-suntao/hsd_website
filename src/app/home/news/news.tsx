import React from 'react'
import styles from './news.module.scss'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons';

import newsImg1 from '../../../../public/img/home/news1.png'
import { describe } from 'node:test'

function News() {

  const data = [
    {
      id: 1,
      picture: newsImg1,
      time: '2024-03-29',
      title: '百日誓师酬壮志，他日相逢青云知声的说法',
      describe: '少年应有鸿鹄志，当骑骏马踏平川。回望过去，高三学子在求学路上踩下了一个个坚实的足迹。展望未来，悄然逼近的决战仅剩百天。一百天的时间其实很短，转瞬即逝；一百天也可以很长......',
    }, {
      id: 2,
      picture: newsImg1,
      time: '2024-03-29',
      title: '阅读·悦心·跃成长',
      describe: '张萍老师分享了《蛤蟆先生去看心理医生》，看似是一本童话故事，却道出了我们成年人面对焦虑和抑郁最真实的感受，从开始不知道自己怎么了，到不愿意面对，觉得丢脸恐惧......',
    }, {
      id: 3,
      time: '2024-03-29',
      picture: newsImg1,
      title: '最是一年春好处，熠熠春光共享受人间美好',
      describe: '春天有信，花开有期。人间四月，春光正好，华盛达外语学校高一高二师生们适时开展春季研学活动，分别前往江南水乡乌镇和安吉百草原，欣赏春的美景，感受春的蓬勃生机......',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>新闻资讯</h2>
          <p>Latest News</p>
        </div>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} alt=""></Image>
                    <div className={styles.time}>
                      <p>{item.time}</p>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card_title}>
                      <p>{item.title}</p>
                    </div>
                    <div className={styles.describe}>
                      <p>{item.describe}</p>
                    </div>
                    <div className={styles.btn}>
                      <button>READ MORE</button>
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default News
