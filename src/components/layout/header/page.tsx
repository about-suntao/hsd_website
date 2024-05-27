'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { PhoneOutlined, EnvironmentFilled, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Drawer } from 'antd';
import logoImg from '../../../../public/img/home/logo.png'

import styles from './page.module.scss'

function Header() {

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);

  const menus = [
    {
      label: (<Link href="/">首页</Link>),
      key: 'home',
    },
    {
      label: (<Link href="/school">学校概况</Link>),
      key: 'school',
    }, {
      label: (<Link href="/course">课程设置</Link>),
      key: 'course',
    }, {
      label: (<Link href="/international">国际合作</Link>),
      key: 'international',
    }, {
      label: (<Link href="/team">师资团队</Link>),
      key: 'team',
    }, {
      label: (<Link href="/campusClass">校园风采</Link>),
      key: 'campusClass',
    }, {
      label: (<Link href="/news">新闻资讯</Link>),
      key: 'news',
    }, {
      label: (<Link href="/">招生简章</Link>),
      key: 'recruitStudent',
    },
  ];

  const handleActive = (key: string) => {
    setCurrent(key)
    onClose()
  }

  const onClose = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (path === '/') {
      setCurrent('home')
    } else {
      const newPath = path.substring(1)
      setCurrent(newPath)
    }
  }, [path])


  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.topBox}>
          <div className={styles.phone}>
            <div className={styles.icon}>
              <PhoneOutlined />
            </div>
            <span>(0572) 866 8963</span>
          </div>
          <div className={styles.position}>
            <div className={styles.icon}>
              <EnvironmentFilled />
            </div>
            <span>浙江省湖州市德清县武康街道舞阳街1199号</span>
          </div>
        </div>
      </div>
      <div className={styles.head}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={logoImg} alt=''></Image>
          </div>
          <div className={styles.menu}>
            <ul>
              {
                menus.map((item: any) => {
                  return (
                    <li key={item?.key} >
                      <button onClick={() => handleActive(item?.key)}>
                        <span className={`${current === item.key ? styles.active : ''}`}>{item?.label}</span>
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              <SearchOutlined />
              <MenuOutlined onClick={openDrawer} />
            </div>
            <div className={styles.btn}>
              <button>报名预约</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileNav} style={{ display: open ? '' : 'none' }}>
        <Drawer
          placement="right"
          open={open}
          closable={false}
          getContainer={false}
          onClose={onClose}
        >
          <div className={styles.drawerNav}>
            <ul>
              {
                menus.map((item: any) => {
                  return (
                    <li key={item?.key} >
                      <button onClick={() => handleActive(item?.key)}>
                        <span className={`${current === item.key ? styles.active : ''}`}>{item?.label}</span>
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
