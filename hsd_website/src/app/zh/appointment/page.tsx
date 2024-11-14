'use client'
import React, { useRef, useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Button, Form, Input, message } from 'antd';
import fetchRequest from '@/utils/fetchRequest';
import { CheckCircleOutlined } from '@ant-design/icons';

function Appointment() {

  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmit, setIsSubmit] = useState(false)
  const [form] = Form.useForm();
  const formRef: any = useRef()


  const Regexp = {
    phone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  }

  useEffect(() => {
    // setIsSubmit(false)
  }, [])

  const onFinish = async (values: any) => {
    const response = await fetchRequest.post('/icon/web/student/information/add', values)
    if (response.code === 200) {
      messageApi.success('提交成功');
      setIsSubmit(true)
      if (formRef.current) {
        formRef.current?.resetFields()
      }
    } else {
      message.error(response.message)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Make an appointment to visit the school</p>
        </div>
        <div className={styles.right}>
          <div className={styles.login} style={{ display: `${isSubmit ? "none" : 'block'}` }}>
            {contextHolder}
            <Form
              form={form}
              name="subForm"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              ref={formRef}
              colon={false}
            >
              <Form.Item label="学生姓名:" name="name"
                rules={[{ required: true, message: '请输入学生姓名' }]}>
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item
                label="现就读年级:"
                name="grade"
                rules={[{ required: true, message: '请输入现就读年级！' }]}
              >
                <Input placeholder="请输入现就读年级" />
              </Form.Item>
              <Form.Item
                label="现就读学校:"
                name="school"
                rules={[{ required: true, message: '请输入现就读学校！' }]}
              >
                <Input placeholder="请输入现就读学校" />
              </Form.Item>
              <Form.Item
                label="父亲姓名:"
                name="fatherName"
              >
                <Input placeholder="请输入父亲姓名" />
              </Form.Item>
              <Form.Item
                label="父亲联系电话:"
                name="fatherPhone"
                rules={[
                  { required: true, message: '请输入父亲联系电话!' },
                  { pattern: Regexp.phone, message: '手机号格式不正确!' },
                ]}
              >
                <Input placeholder="请输入父亲联系电话" />
              </Form.Item>
              <Form.Item
                label="母亲姓名:"
                name="motherName"
              >
                <Input placeholder="请输入母亲姓名" />
              </Form.Item>
              <Form.Item
                label="母亲联系电话:"
                name="motherPhone"
                rules={[
                  { required: true, message: '请输入母亲联系电话!' },
                  { pattern: Regexp.phone, message: '手机号格式不正确!' },
                ]}
              >
                <Input placeholder="请输入母亲联系电话" />
              </Form.Item>
              <Form.Item label=" " >
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.tips} style={{ display: `${!isSubmit ? "none" : 'block'}` }}>
            <div className={styles.icon}><CheckCircleOutlined /></div>
            <h2>预约成功</h2>
            <p>请保持手机通讯畅通</p>
            <p>招生老师会在24小时内和您联系。</p>
            <div className={styles.btn}>
              <Button type='primary' onClick={() => { setIsSubmit(false) }}>再次填写</Button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Appointment
