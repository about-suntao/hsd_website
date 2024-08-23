'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Steps } from "antd";
import { useRouter } from 'next/navigation';
import fetchRequest from '@/utils/fetchRequest';
import { decryptData } from '@/utils/crypto'
import FormInfo from './formInfo/formInfo';
import CodePay from './codePay/codePay';
import Success from './success/success';

function Apply({ params }: any) {
  const router = useRouter()
  const [current, setCurrent] = useState<number>()
  const [order, setOrder] = useState({})
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await fetchRequest.getAes('/icon/user/isOrderExist', { itemId: params.project }, true);
        if (response.code === 200) {
          const data: any = decryptData(response.data)
          const status = data.orderStatus
          setCurrent(parseInt(status))
          if (status === '1') {
            setOrder(data)
          }
          setIsLoad(true)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchQRCode();
  }, []);

  const stepsArr = [
    {
      title: '信息填写',
    },
    {
      title: '报名缴费',
    },
    {
      title: '报名成功',
    },
  ]

  const changeCurrent = (data: number) => {
    setCurrent(data)
  }

  const changeOrderId = (orderData: any) => {
    setOrder(orderData)
  }

  return (
    isLoad &&
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.back} onClick={() => router.push('/dashboard')}>
          <DoubleLeftOutlined /> 返回
        </div>
        <div className={styles.progress}>
          <Steps
            current={current}
            items={stepsArr}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            {
              current === 0 ? <FormInfo project={params.project} changeCurrent={changeCurrent} changeOrderId={changeOrderId}></FormInfo> :
                current === 1 ? <CodePay changeCurrent={changeCurrent} orderData={order}></CodePay> :
                  current === 2 ? <Success></Success> : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply
