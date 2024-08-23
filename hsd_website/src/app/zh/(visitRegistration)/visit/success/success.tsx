import React from 'react'
import styles from './success.module.scss'
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';


function Success() {
  const router = useRouter()

  return (
    <div className={styles.success}>
      <div className={styles.tips}>
        <div className={styles.icon}><CheckCircleOutlined /></div>
        <h2>预约成功</h2>
        <p>预约成功，请保持手机通讯畅通，招生老师会和您核对入校事项。</p>
        <p>在-<span>记录查询</span> 中可以查看预约记录</p>
        <p>参观时请携带身份证件</p>
        <div className={styles.btn}>
          <Button type='primary' onClick={() => router.push('/search')}>查看预约信息</Button>
        </div>
      </div>
    </div>
  )
}

export default Success
