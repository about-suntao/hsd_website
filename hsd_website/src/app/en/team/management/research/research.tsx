'use client'
import React, { useState, useEffect } from 'react'
import styles from './research.module.scss'
import fetchRequest from '@/utils/fetchRequest';
import Image from 'next/image';
import honorLogo from '../../../../../../public/img/team/honor_logo.png'


function Research() {
  const [active, setActive] = useState<number>(0)
  const [data, setData] = useState([])

  const tabsItem = [
    {
      id: 1,
      label: 'Teachers',
      teamId: 3
    }, {
      id: 2,
      label: 'Overseas Tutors',
      teamId: 2
    }
  ]

  const getData = async (id: number) => {
    const res = await fetchRequest.get('/icon/web/people/queryAll', { teamId: id, language: 'EN' });
    setData(res.data)
  }

  const handleBtn = (item: any) => {
    setActive(item.teamId)
    getData(item.teamId)
  }

  useEffect(() => {
    handleBtn(tabsItem[0])
  }, []);

  function Teacher() {
    return (
      <div className={styles.teacher}>
        {
          data.map((item: any) => {
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.photo}>
                  <Image src={item.photograph} alt='' width={200} height={300} priority></Image>
                </div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.position}>{item.position}</p>
                <ul>
                  {
                    item.honors.map((i: any) => {
                      return (
                        <li key={i.id}>
                          {i.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }

  function Overseas() {
    return (
      <div className={styles.overseas}>
        {
          data.map((item: any) => {
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.about}>
                    <p className={styles.name}>{item.name}</p>
                    <ul>
                      {
                        item.honors.map((i: any) => {
                          return (
                            <li key={i.id}>
                              <Image src={honorLogo} alt=''></Image>
                              <p >{i.name}</p>
                              <Image src={honorLogo} alt=''></Image>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className={styles.photo}>
                    <Image src={item.photograph} alt='' width={200} height={300} priority></Image>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  {item.intro}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Teaching and research team</h2>
        </div>
        <div className={styles.tabs}>
          {
            tabsItem.map((item: any) => {
              return (
                <button key={item.id}
                  className={active === item.teamId ? styles.active : styles.btn}
                  onClick={() => handleBtn(item)}>
                  {item.label}
                </button>
              )
            })
          }
        </div>
        {
          active === 3 ? <Teacher></Teacher> :
            active === 2 ? <Overseas></Overseas> : null
        }
      </div>
    </div>
  )
}

export default Research
