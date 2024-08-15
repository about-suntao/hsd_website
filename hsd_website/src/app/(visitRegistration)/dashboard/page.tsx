'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import schoolImg from '../../../../public/img/visit/dashboard.webp'
import setImg from '../../../../public/img/visit/set.webp'
import { useRouter } from 'next/navigation'
import { decryptData } from '@/utils/crypto'

function Dashboard() {
  const router = useRouter()

  const [userInfo, setUserInfo] = useState<any>({})

  const data = [
    {
      id: 1,
      name: '预约参观',
      url: '',
    }, {
      id: 2,
      name: '入学报名',
      url: '',
    }, {
      id: 3,
      name: '历史预约',
      url: '',
    },
  ]

  useEffect(() => {
    setUserInfo(decryptData(localStorage.getItem('user') as string))
  }, [])

  const handleRouter = (url: string) => {
    router.push(url)
  }

  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <div className={styles.school}>
          <Image src={schoolImg} alt=""></Image>
          <div className={styles.info}>
            <p>撒旦法见客户</p>
            <Image src={setImg} alt=''></Image>
          </div>
        </div>
        <div className={styles.title}>
          <h2>德清县华盛达外语学校国际部</h2>
          <p>家长您好:如您有意向预约访校和招生咨询，请选择并填写下方表单。</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id} onClick={() => handleRouter(item.url)}>
                  <p>{item.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
