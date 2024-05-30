'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { PhoneOutlined, EnvironmentFilled, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';
import logoImg from '../../../../public/img/home/logo.png'

import styles from './page.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

function Header() {

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);
  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }
  const items: MenuItem[] = [
    {
      label: <Link href="/">首页</Link>,
      key: 'home',
    },
    {
      label: '学校概况',
      key: 'school',
      children: [
        { label: (<Link href="/school/profile">走近华盛达</Link>), key: 'profile' },
        { label: '德育特色', key: 'moralEducation' },
        { label: '教学特色', key: 'teachFeature' },
      ],
    },
    {
      label: (<Link href="/course">班型介绍</Link>),
      key: 'course',
    }, {
      label: (<Link href="/international">国际合作</Link>),
      key: 'international',
    },
    {
      label: '师资团队',
      key: 'team',
      children: [
        { label: '管理团队', key: 'management' },
        { label: '教学团队', key: 'teachTeam' },
      ],
    }, {
      label: (<Link href="/campusClass">校园风采</Link>),
      key: 'campusClass',
    },
    {
      label: (<Link href="/news">新闻资讯</Link>),
      key: 'news',
    }, {
      label: (<a onClick={() => openNewWindow('https://mp.weixin.qq.com/s/C2ealJO5Rd4JqakrxUECdw')}>招生简章</a>),
      key: 'recruitStudent',
    }
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    onClose()
  };

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
      const newPath = path.split('/')
      const key = newPath[newPath.length - 1]
      setCurrent(key)
    }
  }, [path])

  // menu组件小于768隐藏后，放大不会重载，解决这个问题
  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.topBox}>
          <div className={styles.phone}>
            <div className={styles.icon}>
              <PhoneOutlined />
            </div>
            <span>0572-8668963</span>
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
            {isMenuVisible && (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />)}
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
            <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
