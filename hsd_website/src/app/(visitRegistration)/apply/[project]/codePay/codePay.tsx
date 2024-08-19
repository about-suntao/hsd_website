'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './codePay.module.scss'
import Image from 'next/image'
import { LoadingOutlined } from '@ant-design/icons';
import fetchRequest from '@/utils/fetchRequest'
import { decryptData } from '@/utils/crypto'
import getToken from '@/utils/getToken'

import EditFormInfo from './editForm/editForm';

function CodePay({ orderData, changeCurrent }: any) {

  const [alipayQrCode, setAlipayQrCode] = useState('');
  const [price, setPrice] = useState('');
  const [qrId, setQrId] = useState(null);
  const [loading, setLoading] = useState<boolean>(false); // 新增状态
  const [isView, setIsView] = useState(false)
  const [formData, setFormData] = useState({})
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // 获取二维码
    const fetchQRCode = async () => {
      try {
        const params = {
          id: orderData.orderId,
          paymentMethod: 1
        }
        const response = await fetchRequest.postAes('/huifu/pay', params);
        if (response.code === 200) {
          const data: any = decryptData(response.data)
          setAlipayQrCode(data.qr_code);
          setPrice(data.amount)
          setQrId(data.req_seq_id)
          setLoading(true)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchQRCode();
  }, []);

  const startPolling = () => {
    // 清除可能存在的定时器
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(async () => {
      try {
        const params = { reqSeqId: qrId }
        const response = await fetchRequest.postAes(`/icon/order/payQuery`, params);
        if (response.code === 200) {
          const data: any = decryptData(response.data)
          if (data.payStatus) {
            clearInterval(intervalRef.current); // 停止轮询
            changeCurrent(2)
          }
        }
      } catch (error) {
        console.error(error);
      }
    }, 1000); // 每秒查询一次
  };

  useEffect(() => {
    if (qrId) {
      startPolling(); // 启动轮询
    }
    return () => clearInterval(intervalRef.current);
  }, [qrId]);

  const getOrderData = async () => {
    const response = await fetchRequest.postAes(`/icon/signUp/querySignUp`, { id: orderData.signUpId });
    if (response.code === 200) {
      const data: any = decryptData(response.data)
      setFormData(data)
    }
  }

  const changeViewData = () => {
    setIsView(!isView)
    if (isView) {
      startPolling()
    } else {
      clearInterval(intervalRef.current)
      getOrderData()
    }
  }

  const ChangeFormData = async (data: any) => {
    setFormData(data)
    const response = await fetchRequest.putAes(`/icon/signUp/editSignUp`, { id: orderData.signUpId, ...data });
    if (response.code === 200) {
      const data = response.data
    }
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <button className={styles.viewDataBtn} onClick={() => changeViewData()}>
          {isView ? '报名缴费' : '查看报名信息'}
        </button>
        <div className={styles.form} style={{ display: `${isView ? 'block' : 'none'}` }}>
          <EditFormInfo formData={formData} ChangeFormData={ChangeFormData}></EditFormInfo>
        </div>
        <div className={styles.content} style={{ display: `${isView ? 'none' : 'block'}` }}>
          <div className={styles.price}>
            报名费用 <span>{price}</span> 元
          </div>
          <div className={styles.title}>
            <p>欢迎使用支付宝</p>
          </div>
          <div className={styles.code}>
            {
              loading ? <Image src={alipayQrCode} alt='' width={1000} height={1000} priority ></Image> : <LoadingOutlined />
            }
          </div>
          <div className={styles.desc}>
            <p>打开支付宝 [扫一扫]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePay
