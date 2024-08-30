'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Steps } from "antd";
import Notice from './notice/notice';
import FormInfo from './formInfo/formInfo';
import Success from './success/success';
import { useRouter } from 'next/navigation';

function Visit() {

  const router = useRouter()

  const [current, setCurrent] = useState(0)
  const stepsArr = [
    {
      title: '预约须知',
    },
    {
      title: '信息填写',
    },
    {
      title: '预约成功',
    },
  ]

  const changeCurrent = (data: number) => {
    setCurrent(data)
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.back} onClick={() => router.push('/zh/dashboard')}>
          <DoubleLeftOutlined /> 返回
        </div>
        <div className={styles.progress}>
          <Steps
            current={current}
            items={stepsArr}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            {
              current === 0 ? <Notice changeCurrent={changeCurrent}></Notice> :
                current === 1 ? <FormInfo changeCurrent={changeCurrent}></FormInfo> :
                  <Success></Success>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visit
