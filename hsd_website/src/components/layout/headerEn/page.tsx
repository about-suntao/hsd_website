'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';
import SwitchLanguage from '@/components/switchLanguage/page'

import logoImg from '../../../../public/img/home/logo.webp'

import phoneIcon from '../../../../public/img/home/phone.webp'
import Email from '../../../../public/img/home/mail.webp'
import positionIcon from '../../../../public/img/home/position.webp'

import styles from './page.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

function Header() {
  const router = useRouter()

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);
  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }

  const handleRouter = () => {
    localStorage.getItem('user') ? router.push('/en/dashboard') : router.push('/en/login')
  }

  const items: MenuItem[] = [
    {
      label: <Link href="/en">Home</Link>,
      key: 'home',
    },
    {
      label: 'School Profile',
      key: 'school',
      children: [
        { label: (<Link href="/en/school/profile">Approaching</Link>), key: '/en/school/profile' },
        { label: (<Link href="/en/school/moralEducation">Moral Education Features</Link>), key: '/en/school/moralEducation' },
        { label: (<Link href="/en/school/teaching">Teaching Features</Link>), key: '/en/school/teaching' },
      ],
    },
    {
      label: (<Link href="/en/course">Curriculum</Link>),
      key: '/en/course',
    }, {
      label: (<Link href="/en/international">Cooperation</Link>),
      key: '/en/international',
    },
    {
      label: (<Link href="/en/team/management">Team</Link>),
      key: '/en/team/management',
    }, {
      label: (<Link href="/en/campusClass">Campus</Link>),
      key: '/en/campusClass',
    },
    {
      label: (<Link href="/en/news">Information</Link>),
      key: '/en/news',
    },
    {
      label: 'Enrollment',
      key: 'entranceSchool',
      children: [
        {
          label: (<a onClick={() => openNewWindow('https://mp.weixin.qq.com/s/C2ealJO5Rd4JqakrxUECdw')}>Admissions</a>),
          key: 'recruitStudent',
        },
        { label: (<Link href="/en/entranceSchool/admissionGoal">Further Studies</Link>), key: '/en/entranceSchool/admissionGoal' },
        { label: (<Link href="/en/entranceSchool/scholarship">Scholarships</Link>), key: '/en/entranceSchool/scholarship' },
      ]
    },

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
    if (path === '/' || path === '/en') {
      setCurrent('home')
    } else {
      // const newPath = path.split('/')
      // const key = newPath[newPath.length - 1]
      setCurrent(path)
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
          <div className={styles.topBox_left}>
            <div className={styles.phone}>
              <div className={styles.icon}>
                <Image src={phoneIcon} alt=''></Image>
              </div>
              <span>0572-8668963</span>
            </div>
            {/* <div className={styles.position}>
            <div className={styles.icon}>
              <Image src={Email} alt=''></Image>
            </div>
            <span>0572-8668963</span>
          </div> */}
            <div className={styles.position}>
              <div className={styles.icon}>
                <Image src={positionIcon} alt=''></Image>
              </div>
              <span>No. 1199 Wuyang Street, Wukang Street, Deqing County, Huzhou City, Zhejiang Province</span>
            </div>
          </div>
          <SwitchLanguage></SwitchLanguage>
        </div>
      </div>
      <div className={styles.head}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={logoImg} alt=''></Image>
          </div>
          <div className={styles.menu}>
            {isMenuVisible && (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" inlineCollapsed={false} items={items} />)}
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              <MenuOutlined onClick={openDrawer} />
            </div>
            <div className={styles.btn}>
              <button onClick={() => handleRouter()}>Appointment</button>
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
