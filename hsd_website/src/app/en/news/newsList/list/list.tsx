import React, { useState, useEffect } from 'react'
import styles from './list.module.scss'
import Image from 'next/image';
import fetchRequest from '@/utils/fetchRequest';
import { Pagination, ConfigProvider } from "antd";
import type { PaginationProps } from 'antd';
import en_GB from 'antd/locale/en_GB';

import timeImg from '../../../../../../public/img/news/time.png'


function ListComponent({ inputValue, handleView }: any) {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态
  const [searchParams, setSearchParams] = useState(
    {
      pageNum: 1,
      pageSize: 10,
      total: 0,
    }
  );

  const getData = async (params: any) => {
    const res = await fetchRequest.get('/icon/web/news/queryByPage', params);
    setDataLoaded(true); // 设置数据已加载
    setData(res.data.list)
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: res.data?.pageNum,
      pageSize: res.data?.pageSize,
      total: res.data?.total,
    }))
  }

  useEffect(() => {
    getData(searchParams)
  }, []);

  useEffect(() => {
    if (inputValue !== null) {
      getData({ ...searchParams, title: inputValue })
    }
  }, [inputValue])

  const onChange: PaginationProps['onChange'] = (page: any, pageSize: any) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: page,
      pageSize: pageSize,
    }))
    getData({
      ...searchParams,
      pageNum: page,
      pageSize: pageSize,
    })
  };


  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.listBox}>
      {
        data.length !== 0 ?
          <ul className={styles.list}>
            {
              data.map((item: any) => {
                return (
                  <li className={styles.card} key={item.id} onClick={() => handleView(item.id)}>
                    <div className={styles.picture}>
                      <Image src={item.picture} alt='' width={400} height={300} priority></Image>
                    </div>
                    <div className={styles.card_body}>
                      <p className={styles.card_name}>
                        {item.title}
                      </p>
                      <div className={styles.time}>
                        <Image src={timeImg} alt=''></Image>
                        <p>{item.createTime}</p>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          : <div className={styles.noData}>
            <p>No data available for <span>({inputValue})</span></p>
          </div>
      }

      <div className={styles.pagination}>
        <ConfigProvider locale={en_GB}>
          <Pagination
            showQuickJumper
            showSizeChanger
            total={searchParams.total}
            current={searchParams.pageNum}
            defaultCurrent={searchParams.pageNum}
            pageSize={searchParams.pageSize}
            showTotal={(total) => `${total} In Total`}
            onChange={onChange}
          />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default ListComponent
