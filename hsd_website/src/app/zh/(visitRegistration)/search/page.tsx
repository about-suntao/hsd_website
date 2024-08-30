'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from './page.module.scss'
import { Button, Tabs, Modal, Form, Input, message, Popconfirm } from 'antd';
import type { TabsProps } from 'antd';
import { useRouter } from 'next/navigation';
import fetchRequest from '@/utils/fetchRequest';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { decryptData } from '@/utils/crypto'

function Search() {
  const router = useRouter()
  const [appointment, setAppointment] = useState([])
  const [apply, setApply] = useState([])
  const [orderId, setOrderId] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const formRef: any = useRef()

  const getAppointmentData = async () => {
    try {
      const response = await fetchRequest.getAes('/icon/user/subscribeCenter', null, true);
      if (response.code === 200) {
        const data: any = decryptData(response.data)
        setAppointment(data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getApplyData = async () => {
    try {
      const response = await fetchRequest.getAes('/icon/user/orderCenter', null, true);
      if (response.code === 200) {
        const data: any = decryptData(response.data)
        setApply(data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const refund = async (values: any) => {
    const params = {
      orderId: orderId,
      reason: values.reason
    }
    const response = await fetchRequest.postAes('/icon/order/applyRefund', params);
    if (response.code === 200) {
      message.success('申请退款成功，请等待审核');
      setIsModalOpen(false);
      getApplyData()
    }
  }

  const cancelRefund = async (data: any) => {
    const params = {
      id: data.id,
    }
    const response = await fetchRequest.postAes('/icon/order/cancelRefund', params);
    if (response.code === 200) {
      getApplyData()
      message.success('已取消退款');
    } else {
      message.warning(response?.message);
    }
  }

  const statusObject: any = {
    '1': '未支付',
    '2': '已支付',
    '3': '已完成',
    '4': '已过期',
    '5': '退款审核中(48小时内)',
    '6': '已退款',
  }

  useEffect(() => {
    getAppointmentData()
    getApplyData()
  }, [])

  const onChange = (key: string) => {
    console.log(key);
  };


  const showModal = (data: any) => {
    setOrderId(data.id)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const AppointmentCard = () => {
    return (
      appointment.length > 0 ?
        <ul>
          {
            appointment.map(((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.details}>
                    <div className={styles.items}><p>预约人：</p><span>{item.name}</span></div>
                    <div className={styles.items}><p>参观日期：</p><span>{item.visitTime}</span></div>
                    <div className={styles.items}><p>入学时间：</p><span>{item.enrollmentYear}-{item.enrollmentTerm}</span></div>
                    <div className={styles.items}><p>首选项目：</p><span>{item.item}</span></div>
                    <div className={styles.items}><p>联系方式：</p><span>{item.visitorPhone}</span></div>
                    <div className={styles.items}><p>是否自驾：</p><span>{item.comeWay}</span></div>
                    <div className={styles.items}><p>车牌号：</p><span>{item.licenseNumber}</span></div>
                  </div>
                </li>
              )
            }))
          }
        </ul>
        :
        <div className={styles.noCard}>暂无预约记录</div>
    )
  }

  const ApplyCard = () => {
    return (
      apply.length > 0 ?
        <ul className={styles.appointmentCard}>
          {
            apply.map(((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.details}>
                    <div className={styles.items}><p>学生姓名：</p><span>{item.name}</span></div>
                    <div className={styles.items}><p>报名项目：</p><span>{item.itemName}</span></div>
                    <div className={styles.items}><p>创建时间：</p><span>{item.createTime}</span></div>
                    <div className={styles.items}><p>订单号：</p><span>{item.code}</span></div>
                    <div className={styles.items}><p>价格：</p><span className={styles.price}>${item.amount}</span></div>
                    <div className={styles.items}><p>订单状态：</p><span className={styles.status}>{statusObject[item.status] || ''}</span></div>
                  </div>
                  {
                    item.reasonReject &&
                    <div className={styles.refundReason}>
                      <p>管理员于{item.rejectTime}驳回您的退款申请，拒绝退款原因:<span>{item.reasonReject}</span></p>
                    </div>
                  }
                  <div className={styles.btnGroup}>
                    <Button type='link'
                      style={{ display: `${item.status === '2' ? 'blokc' : 'none'}` }}
                      onClick={() => showModal(item)}
                    >
                      申请退款
                    </Button>
                    <Popconfirm
                      title="取消退款"
                      description="确认取消退款？"
                      onConfirm={() => cancelRefund(item)}
                      okText={'确定'}
                      cancelText={'取消'}
                    >
                      <Button
                        type='link'
                        style={{ display: `${item.status === '5' ? 'block' : 'none'}` }}>
                        取消退款
                      </Button>
                    </Popconfirm>

                  </div>
                </li>
              )
            }))
          }
        </ul >
        :
        <div className={styles.noCard}>暂无报名记录</div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '报名记录',
      children: <ApplyCard></ApplyCard>,
    },
    {
      key: '2',
      label: '预约记录',
      children: <AppointmentCard></AppointmentCard>,
    },
  ];

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.back} onClick={() => router.push('/zh/dashboard')}>
          <DoubleLeftOutlined /> 返回
        </div>
        <div className={styles.project}>
          <h2>记录查询</h2>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          <div className={styles.dialog}>
            <Modal
              title="申请退款"
              getContainer={false}
              centered
              open={isModalOpen}
              onOk={handleOk}
              okText='确定'
              onCancel={handleCancel}
              cancelText={'取消'}
            >
              <Form
                form={form}
                name="form"
                onFinish={refund}
                ref={formRef}
              >
                <p className={styles.tips}>退款需要商家审核，预计48小时内到账！</p>
                <Form.Item name="reason" label="退款原因：" rules={[{ required: true, message: '请输入退款原因' }]} >
                  <Input placeholder="请输入退款原因" allowClear />
                </Form.Item>
              </Form>
            </Modal>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search
