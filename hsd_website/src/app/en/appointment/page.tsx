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
      messageApi.success('Submit Successfully');
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
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              ref={formRef}
              colon={false}
            >
              <Form.Item label="Student's name:" name="name"
                rules={[{ required: true, message: "Please enter the student's name" }]}>
                <Input placeholder="Please enter the student's name" />
              </Form.Item>
              <Form.Item
                label="Current grade:"
                name="grade"
                rules={[{ required: true, message: 'Please enter the Current grade' }]}
              >
                <Input placeholder="Please enter the current grade" />
              </Form.Item>
              <Form.Item
                label="Present school:"
                name="school"
                rules={[{ required: true, message: 'Please enter your current school' }]}
              >
                <Input placeholder="Please enter your current school" />
              </Form.Item>
              <Form.Item
                label="Father's name:"
                name="fatherName"
              >
                <Input placeholder="Please enter  your father's name" />
              </Form.Item>
              <Form.Item
                label="Father's phone:"
                name="fatherPhone"
                rules={[
                  { required: true, message: "Please enter your father's phone number" },
                  { pattern: Regexp.phone, message: 'The format of the mobile phone number is incorrect!' },
                ]}
              >
                <Input placeholder="Please enter your father's phone number" />
              </Form.Item>
              <Form.Item
                label="Mother's name:"
                name="motherName"
              >
                <Input placeholder="Please enter your mother's name" />
              </Form.Item>
              <Form.Item
                label="Mother's phone:"
                name="motherPhone"
                rules={[
                  { required: true, message: "Please enter your mother's phone number" },
                  { pattern: Regexp.phone, message: 'The format of the mobile phone number is incorrect!' },
                ]}
              >
                <Input placeholder="Please enter your Mother's phone number" />
              </Form.Item>
              <Form.Item label=" " >
                <Button type="primary" htmlType="submit">
                  submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.tips} style={{ display: `${!isSubmit ? "none" : 'block'}` }}>
            <div className={styles.icon}><CheckCircleOutlined /></div>
            <h2>Successful appointment</h2>
            <p>Please keep cell phone communication open</p>
            <p>The admissions officer will contact you within 24 hours.</p>
            <div className={styles.btn}>
              <Button type='primary' onClick={() => { setIsSubmit(false) }}>Write again</Button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Appointment
