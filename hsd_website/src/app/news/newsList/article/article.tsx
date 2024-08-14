'use client'
import React, { useState, useEffect } from 'react'
import styles from './article.module.scss'
import Image from 'next/image';
import fetchRequest from '@/utils/fetchRequest';

import backImg from '../../../../../public/img/news/back.webp'


function Article({ id = null, backList = () => { }, handleView }: any) {
  const [data, setData] = useState<any>([])
  const [nextData, setNextData] = useState<any>([])

  const getData = async (articleId: number) => {
    const res: any = await fetchRequest.get(`/icon/web/news/${articleId}`);
    setData(res.data)
    const res1: any = await fetchRequest.get(`/icon/web/news/queryUpAndDown`, { id: id });
    setNextData(res1.data)
  }

  useEffect(() => {
    getData(id)
  }, [id]);

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.back}>
            <button onClick={() => backList()}>
              <Image src={backImg} alt=''></Image>
            </button>
          </div>
          <div className={styles.article_info}>
            <h2>{data?.title}</h2>
            <p>发布时间：{data?.createTime}</p>
          </div>
          <div className={styles.renderArticle} >
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </div>
          <div className={styles.btnGroup}>
            <button onClick={() => handleView(nextData.iconNewPreVo.preId)}>上一篇：{nextData.iconNewPreVo?.preTitle}</button>
            <button onClick={() => handleView(nextData.iconNewNextVo.nextId)}>下一篇：{nextData.iconNewNextVo?.nextTitle}</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Article
