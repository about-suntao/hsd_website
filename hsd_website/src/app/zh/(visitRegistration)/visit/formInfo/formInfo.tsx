import React, { useRef } from 'react'
import styles from './formInfo.module.scss'
import { Button, Form, Select, Input, Space, DatePicker, Radio, message } from "antd";
import fetchRequest from '@/utils/fetchRequest';
import { decryptData } from '@/utils/crypto'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};
function FormInfo({ changeCurrent }: any) {


  const Regexp = {
    phone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    idCard: /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[Xx\d]$/
  }

  const [form] = Form.useForm();
  const formRef: any = useRef()


  const onFinish = async (values: any) => {
    // 处理日期格式
    const params = {
      ...values,
      enrollmentYear: values.enrollmentYear ? values.enrollmentYear.format('YYYY') : null,
      visitTime: values.visitTime ? values.visitTime.format('YYYY-MM-DD') : null,
    }
    const response = await fetchRequest.postAes('/icon/reserve/information/add', params)
    if (response.code === 200) {
      changeCurrent(2)
      message.success('预约成功')
      if (formRef.current) {
        formRef.current?.resetFields()
      }
    } else {
      message.error(response.message)
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.form}>
        <h2>填写预约信息</h2>
        <Form
          {...layout}
          form={form}
          name="form"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          ref={formRef}
        >
          <Form.Item name="name" label="学生姓名：" rules={[{ required: true, message: '请输入学生姓名' }]} >
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="visitTime" label="参观日期：" rules={[{ required: true, message: '请选择参观日期' }]}>
            <DatePicker allowClear format='YYYY-MM-DD' placeholder='请选择入校参观日期' />
          </Form.Item>
          <Form.Item name="province" label="生源省份：">
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="enrollmentYear" label="入学年份：">
            <DatePicker picker="year" format='YYYY' allowClear placeholder='请选择入学年份' />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => currentValues.enrollmentYear !== undefined}
          >
            {({ getFieldValue }) =>
              getFieldValue('enrollmentYear') ? (
                <Form.Item name="enrollmentTerm" label="入学学期：">
                  <Select
                    placeholder="请选择学期"
                    allowClear
                  >
                    <Option value="春季">春季</Option>
                    <Option value="秋季">秋季</Option>
                  </Select>
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item name="item" label="首选项目">
            <Select
              placeholder="请选择项目"
              allowClear
            >
              <Option value="世界顶级名校QS50">世界顶级名校QS50</Option>
              <Option value="QS100本科留学项目">QS100本科留学项目</Option>
              <Option value="港澳八大院校定向培养项目">港澳八大院校定向培养项目</Option>
            </Select>
          </Form.Item>
          <Form.Item name="idCard" label="身份证号："
            rules={[
              { required: true, message: '请输入身份证号码' },
              { pattern: Regexp.idCard, message: '身份证格式不正确!' }
            ]}>
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="phone" label="手机号码："
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: Regexp.phone, message: '手机号格式不正确!' }
            ]}>
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="visitorIdentity" label="来访人身份：" initialValue={'学生'}>
            <Radio.Group>
              <Radio value="家长"> 家长 </Radio>
              <Radio value="学生"> 学生 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="visitorPhone" label="来访人电话："
            rules={[
              { required: false, message: '请输入手机号' },
              { pattern: Regexp.phone, message: '手机号格式不正确!' }
            ]} >
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="visitorNumber" label="来访人数：">
            <Input placeholder="申报入校使用" allowClear />
          </Form.Item>
          <Form.Item name="comeWay" label="是否自驾：" initialValue={'否'} rules={[{ required: true }]}>
            <Radio.Group >
              <Radio value="是"> 是 </Radio>
              <Radio value="否" defaultChecked={false} > 否 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.comeWay === currentValues.comeWay}
          >
            {({ getFieldValue }) =>
              getFieldValue('comeWay') === '是' ? (
                <Form.Item name="licenseNumber" label="车牌号码：" rules={[{ required: true, message: '请输入车牌号码' }]}>
                  <Input placeholder="自驾需要填写车牌号" allowClear />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交预约
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}

export default FormInfo
