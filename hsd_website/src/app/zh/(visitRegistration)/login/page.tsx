'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import styles from './page.module.scss'
import { Button, Form, Input, message } from 'antd';
import fetchRequest from '@/utils/fetchRequest';
import { encryptData, decryptData } from '@/utils/crypto'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

let timeChange: any;

import phoneIcon from '../../../../public/img/visit/phone.webp'
import keyIcon from '../../../../public/img/visit/key.webp'

function Login() {

  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const formRef: any = useRef()

  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('获取验证码');

  const Regexp = {
    phone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  }

  useEffect(() => {
    // 删除登录凭证
    localStorage.removeItem('user')
    Cookies.remove('token');
    clearInterval(timeChange);
    return () => clearInterval(timeChange);
  }, []);

  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s后重发`);
    } else {
      clearInterval(timeChange);
      setBtnDisabled(false);
      setTime(60);
      setBtnContent('获取验证码');
    }
  }, [time]);

  const onFinish = async (values: any) => {
    const params = form.getFieldsValue()
    const response = await fetchRequest.postAes('/icon/user/login', params)
    if (response.code === 200) {
      // 缓存用户信息
      localStorage.setItem('user', response.data)
      // 解密后的数据
      const data: any = decryptData(response.data)
      Cookies.set('token', encryptData(data.token) as string, { expires: 3 });
      messageApi.success('登陆成功');
      if (formRef.current) {
        formRef.current?.resetFields()
        router.push('/dashboard')
      }
    } else {
      message.error(response.message)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getPhoneCaptcha = async () => {
    try {
      // 触发手机号验证
      await form.validateFields(['phone']);
      // 60m间隔
      timeChange = setInterval(() => setTime(t => --t), 1000);
      setBtnDisabled(true);
      // 发送短信
      const response = await fetchRequest.postAes('/sms/sendCode', form.getFieldValue('phone'))
      if (response.code === 200) {
        messageApi.success(response.message);
      } else {
        messageApi.error(response.message);
      }
    } catch (error) {
      // 验证失败
      console.log('error')
    }
  };

  return (
    <div className={styles.pages}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Make an appointment to visit the school</p>
        </div>
        <div className={styles.right}>
          <div className={styles.login}>
            {contextHolder}
            <div className={styles.title}>
              <h2>注册</h2>
              <p>Sign In</p>
            </div>
            <Form
              form={form}
              name="subForm"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              ref={formRef}
            >
              <Form.Item name="phone"
                rules={[
                  { required: true, message: '请输入手机号' },
                  { pattern: Regexp.phone, message: '手机号格式不正确!' },
                ]}>
                <Input placeholder="*请输入手机号" prefix={
                  <div className={styles.input_icon}>
                    <Image src={phoneIcon} alt=''></Image>
                  </div>
                } />
              </Form.Item>
              <div className={styles.code}>
                <Form.Item
                  name="code"
                  rules={[{ required: true, message: '请输入验证码' }]}
                >
                  <Input placeholder="*请输入验证码" prefix={
                    <div className={styles.input_icon}>
                      <Image src={keyIcon} alt=''></Image>
                    </div>
                  } />
                </Form.Item>
                <Button disabled={btnDisabled} onClick={getPhoneCaptcha}>
                  {btnContent}
                </Button>
              </div>
              <Form.Item >
                <div className={styles.btn}>
                  <Button type="primary" htmlType="submit">提交</Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
