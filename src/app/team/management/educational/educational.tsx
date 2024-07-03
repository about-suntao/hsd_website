import React from 'react'
import styles from './educational.module.scss'
import Image from 'next/image';
import fetchRequest from '@/utils/fetchRequest';

import cardImg from '../../../../../public/img/team/card.webp'

async function getData() {
  const res = await fetchRequest.get('/icon/web/people/queryAll', { teamId: 3 });
  return {
    data: res.data,
  }
}

async function Educational() {
  const { data } = await getData()
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>教研团队</h2>
          <p>Teaching & Research Team</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.photograph} alt={item.name} width={1000} height={1000} priority={true}></Image>
                  </div>
                  <div className={styles.card}>
                    <Image src={cardImg} alt=''></Image>
                    <h3>{item.name}</h3>
                    <p className={styles.introduce}>{item.intro}</p>
                    <div className={styles.honor}>
                      {
                        item.honors.map((i: any) => {
                          return (
                            <p key={i.id}>
                              <span></span>{i.name}
                            </p>
                          )
                        })
                      }
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

export default Educational
