'use client'
import React, { useEffect, useState } from 'react'
import styles from './news.module.scss'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons';
import fetchRequest from '@/utils/fetchRequest';


function News() {
  const [data, setData] = useState<any>([])

  const getData = async () => {
    const res = await fetchRequest.getNoStore('/icon/web/news/queryByPage?pageNum=1&pageSize=3');
    setData(res.data.list)
  }

  const openNewWindow = (url: string) => {
    window.open(url, '_blank');
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>新闻资讯</h2>
          <p>Latest News</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} width={1000} height={1000} priority={true} alt=""></Image>
                    <div className={styles.time}>
                      <p>{item.createTime}</p>
                    </div>
                  </div>
                  <div className={styles.card} onClick={() => openNewWindow(item.url)}>
                    <div className={styles.card_title}>
                      <p>{item.title}</p>
                    </div>
                    <div className={styles.describe}>
                      <p>{item.description}</p>
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
