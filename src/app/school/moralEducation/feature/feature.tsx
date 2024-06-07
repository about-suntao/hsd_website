import React from 'react'
import styles from './feature.module.scss'
import Image from 'next/image'

import mfImg1 from '../../../../../public/img/school/mf1.webp'
import mfImg2 from '../../../../../public/img/school/mf2.webp'
import mfImg3 from '../../../../../public/img/school/mf3.webp'

import serial1 from '../../../../../public/img/school/01.webp'
import serial2 from '../../../../../public/img/school/02.webp'
import serial3 from '../../../../../public/img/school/03.webp'
import serial4 from '../../../../../public/img/school/04.webp'
import serial5 from '../../../../../public/img/school/05.webp'


function Feature() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.list}>
              <div className={styles.title}>
                <Image src={serial1} alt=''></Image>
                <h2>全员导师制</h2>
              </div>
              <div className={styles.desc}>
                <p>每一位学生都能在学术与升学方面获得导师个性化的帮助指导，全面增强家校共育的力度、广度与深度。</p>
              </div>
            </div>
          </div>
          <div className={styles.picture}>
            <Image src={mfImg1} alt=''></Image>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.pcPicture}>
            <Image src={mfImg2} alt=''></Image>
          </div>
          <div className={styles.content}>
            <div className={styles.list}>
              <div className={styles.title}>
                <Image src={serial2} alt=''></Image>
                <h2>小班化教学</h2>
              </div>
              <div className={styles.desc}>
                <p>每班25人，师生比1:5，有效保证对学生的精准培养，让学生找到最适合自己的未来之路。</p>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>
                <Image src={serial3} alt=''></Image>
                <h2>走班制教学</h2>
              </div>
              <div className={styles.desc}>
                <p>充分赋予学生主体地位，一人一课表，因材施教，确保每位学生都能够得到切实提高。</p>
              </div>
            </div>
          </div>
          <div className={styles.mobilePicture}>
            <Image src={mfImg2} alt=''></Image>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.list}>
              <div className={styles.title}>
                <Image src={serial4} alt=''></Image>
                <h2>爱心教育</h2>
              </div>
              <div className={styles.desc}>
                <p>教师提供安全、可靠和关怀的环境来培养学生的自信和自尊。在每个关键阶段给予学生所需要的全方位身心关注。</p>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>
                <Image src={serial5} alt=''></Image>
                <h2>社团活动</h2>
              </div>
              <div className={styles.desc}>
                <p>涵盖科技、艺术、音乐、舞蹈、运动和语言类，助力学生个性化发展，全面提高综合素质能力，提高自主管理能力。</p>
              </div>
            </div>
          </div>
          <div className={styles.picture}>
            <Image src={mfImg3} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
