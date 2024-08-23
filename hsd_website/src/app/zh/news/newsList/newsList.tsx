'use client'
import React, { useState, useEffect } from 'react'
import styles from './newsList.module.scss'
import fetchRequest from '@/utils/fetchRequest'

import { Input } from 'antd';

import { useRouter } from 'next/navigation'


import ListComponent from './list/list';
import Article from './article/article';

function NewsList({ articleId }: { articleId?: number }) {

  const router = useRouter()
  const { Search } = Input;
  const [inputValue, setInputValue] = useState<any>(null);

  const [hotList, setHotList] = useState([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const [isDetail, setIsDetail] = useState<any>(false);
  const [activeId, setActiveId] = useState<any>(0);


  const onSearch = (value: any) => {
    setInputValue(value)
    setIsDetail(false)
  }

  const getHotList = async () => {
    const res = await fetchRequest.get('/icon/web/news/hot/article');
    setDataLoaded(true); // 设置数据已加载
    setHotList(res.data)
  }

  const handleView = (id: number) => {
    if (id) {
      router.push(`/news/${id}`)
    }
  }

  const backList = () => {
    router.push(`/news`)
  }

  useEffect(() => {
    getHotList()
  }, []);

  useEffect(() => {
    if (articleId) {
      setIsDetail(true)
      setActiveId(articleId)
    }
  }, [articleId]);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.list}>
          {
            isDetail ? <Article id={activeId} backList={() => backList()} handleView={handleView}></Article> :
              <ListComponent inputValue={inputValue} handleView={handleView}></ListComponent>
          }
        </div>
        <div className={styles.other}>
          {
            !articleId &&
            (
              <div>
                <div className={styles.title}>
                  <div className={styles.title_name}>
                    <p>搜索</p>
                  </div>
                  <hr />
                </div>
                <div className={styles.search}>
                  <Search placeholder="" onSearch={onSearch} enterButton allowClear />
                </div>
              </div>
            )
          }
          <div className={styles.title}>
            <div className={styles.title_name}>
              <p>其他热门文章</p>
            </div>
            <hr />
          </div>
          <ul className={styles.hotList}>
            {
              hotList.map((item: any) => {
                return (
                  <li key={item.id} onClick={() => handleView(item.id)}>
                    <div className={styles.point}></div>
                    <p>{item.title}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NewsList
