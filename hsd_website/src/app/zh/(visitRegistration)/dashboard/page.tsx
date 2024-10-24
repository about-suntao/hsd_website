'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import schoolImg from '../../../../../public/img/visit/dashboard.webp'
import setImg from '../../../../../public/img/visit/set.webp'
import { useRouter } from 'next/navigation'
import { decryptData } from '@/utils/crypto'
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';


import { DownOutlined } from '@ant-design/icons';

function Dashboard() {
  const router = useRouter()

  const [userInfo, setUserInfo] = useState<any>({})

  const data = [
    {
      id: 1,
      name: '预约参观',
      url: '/zh/visit',
    }, {
      id: 2,
      name: '入学报名',
      url: '/zh/selectProject',
    }, {
      id: 3,
      name: '历史预约',
      url: '/zh/search',
    },
  ]

  useEffect(() => {
    setUserInfo(decryptData(localStorage.getItem('user') as string))
  }, [])

  const handleRouter = (url: string) => {
    router.push(url)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p onClick={() => router.replace('/zh/login')}>退出登录</p>
      ),
    },
  ];

  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <div className={styles.school}>
          <div className={styles.info}>
            <p>{userInfo?.name}</p>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Image className={styles.setting} src={setImg} alt=''></Image>
                </Space>
              </a>
            </Dropdown>
          </div>
          <Image className={styles.showImg} src={schoolImg} alt=""></Image>
        </div>
        <div className={styles.title}>
          <h2>德清县华盛达外语学校融合部</h2>
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
