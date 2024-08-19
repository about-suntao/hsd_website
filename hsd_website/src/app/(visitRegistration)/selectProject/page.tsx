'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation';
import fetchRequest from '@/utils/fetchRequest';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { decryptData } from '@/utils/crypto'

function SelectProject() {
  const router = useRouter()
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    // 获取二维码
    const fetchQRCode = async () => {
      try {
        const response = await fetchRequest.getAes('/icon/item/queryAll', null, true);
        if (response.code === 200) {
          const data = decryptData(response.data)
          setList(data)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchQRCode();
  }, []);

  const handleRouter = (id: number) => {
    router.push(`/apply/${id}`)
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.back} onClick={() => router.push('./dashboard')}>
          <DoubleLeftOutlined /> 返回
        </div>
        <div className={styles.project}>
          <h2>请选择您的报名项目</h2>
          <ul>
            {
              list.map((item: any) => {
                return (
                  <li key={item.id} onClick={() => handleRouter(item.id)}>
                    <div className={styles.name}>
                      <p><span>项目名称：</span>{item.name}</p>
                    </div>
                    <div className={styles.price}>
                      <h4>项目价格：</h4>
                      <p>{item.price} 元</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SelectProject
