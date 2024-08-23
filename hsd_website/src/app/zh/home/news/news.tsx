import React from 'react'
import styles from './news.module.scss'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons';
import fetchRequest from '@/utils/fetchRequest';
import Link from 'next/link';

async function getData() {
  const res = await fetchRequest.getNoStore('/icon/web/news/queryByPage?pageNum=1&pageSize=3');
  return {
    data: res.data.list,
  }
}

async function News() {
  const { data } = await getData()
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
                  <Link href={`/news/${item.id}`}>
                    <div className={styles.card}>
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
                  </Link>
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
