import React, { useRef } from 'react'
import styles from './formInfo.module.scss'
import { Button, Form, Select, Input, Space, Popconfirm } from "antd";
import fetchRequest from '@/utils/fetchRequest';
import { decryptData } from '@/utils/crypto'
import ImageUpload from '@/components/uploadImage/ImageUpload';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const { Option } = Select;
const { TextArea } = Input;

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

function FormInfo({ project, changeCurrent, changeOrderId }: any) {

  const Regexp = {
    idCard: /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[Xx\d]$/
  }

  const [form] = Form.useForm();
  const formRef: any = useRef()

  const onFinish = async (values: any) => {
    const params = {
      item_id: project,
      ...values
    }
    const response = await fetchRequest.postAes('/icon/signUp/add', params)
    if (response.code === 200) {
      const data = decryptData(response.data)
      changeOrderId(data)
      changeCurrent(1)
      if (formRef.current) {
        formRef.current?.resetFields()
      }
    }
  };

  const confirm = () => {
    // 提交表单
    form.submit()
  }

  return (
    <div className={styles.info}>
      <div className={styles.form}>
        <h2>填写报名信息</h2>
        <Form
          {...layout}
          form={form}
          name="form"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          ref={formRef}
        >
          <h3>个人背景信息</h3>
          <Form.Item name="name" label="姓名：" rules={[{ required: true, message: '请输入学生姓名' }]} >
            <Input placeholder="请输入姓名" allowClear />
          </Form.Item>
          <Form.Item name="bareheadedPhoto" label="一寸免冠照：">
            <ImageUpload onChange={(url: string[]) => {
              form.setFieldsValue({ bareheadedPhoto: url[0] });
            }}>
            </ImageUpload>
          </Form.Item>
          <Form.Item name="idCard" label="身份证号："
            rules={[
              { required: true, message: '请输入身份证号码' },
              { pattern: Regexp.idCard, message: '身份证格式不正确!' }
            ]}>
            <Input placeholder="请输入身份证号码" allowClear />
          </Form.Item>
          <Form.Item label="身份证图片：" rules={[{ required: true, message: '' }]}>
            <div className={styles.idBox}>
              <Form.Item
                name="idFrontside"
                rules={[{ required: true, message: '请上传正面' }]}
              >
                <ImageUpload
                  onChange={(url: string[]) => {
                    form.setFieldsValue({ idFrontside: url[0] });
                  }}
                  tips='身份证正面'
                />
              </Form.Item>
              <Form.Item
                name="idBackside"
                rules={[{ required: true, message: '请上传反面' }]}
              >
                <ImageUpload
                  onChange={(url: string[]) => {
                    form.setFieldsValue({ idBackside: url[0] });
                  }}
                  tips='身份证反面'
                />
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item name="passportNumber" label="护照号：">
            <Input placeholder="请输入护照号" allowClear />
          </Form.Item>
          <Form.Item name="passportPhoto" label="护照照片：">
            <ImageUpload onChange={(url: string[]) => {
              form.setFieldsValue({ passportPhoto: url[0] });
            }}></ImageUpload>
          </Form.Item>
          <Form.Item name="fatherName" label="父亲姓名：" rules={[{ required: true, message: '请输入父亲姓名' }]} >
            <Input placeholder="请输入父亲姓名" allowClear />
          </Form.Item>
          <Form.Item name="fatherWork" label="工作单位：" rules={[{ required: true, message: '请输入父亲工作单位' }]} >
            <Input placeholder="父亲工作单位" allowClear />
          </Form.Item>
          <Form.Item name="motherName" label="母亲姓名：" rules={[{ required: true, message: '请输入母亲姓名' }]} >
            <Input placeholder="请输入母亲姓名" allowClear />
          </Form.Item>
          <Form.Item name="motherWork" label="工作单位：" rules={[{ required: true, message: '母亲工作单位' }]} >
            <Input placeholder="母亲工作单位" allowClear />
          </Form.Item>
          <h3>项目选择</h3>
          <Form.Item name="item" label="报名项目:">
            <Select
              placeholder="请选择项目"
              allowClear
            >
              <Option value="世界顶级名校QS50">世界顶级名校QS50</Option>
              <Option value="QS100本科留学项目">QS100本科留学项目</Option>
              <Option value="港澳八大院校定向培养项目">港澳八大院校定向培养项目</Option>
            </Select>
          </Form.Item>
          <Form.Item name="englishScore" label="高考英语：">
            <Input placeholder="高考英语成绩" allowClear />
          </Form.Item>
          <Form.Item name="toeflScore" label="托福：">
            <Input placeholder="托福成绩" allowClear />
          </Form.Item>
          <Form.Item name="ieltsScore" label="雅思：">
            <Input placeholder="雅思成绩" allowClear />
          </Form.Item>
          <Form.Item name="personalStatement" label="个人陈诉：">
            <TextArea placeholder="目标国家，目标专业，对专业的理解" rows={5} allowClear />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Popconfirm
                title="确认提交"
                description="请仔细确认报名信息，支付后不可更改！"
                onConfirm={confirm}
                okText={'确定'}
                cancelText={'取消'}
              >
                <Button type="primary">
                  提交报名信息
                </Button>
              </Popconfirm>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}

export default FormInfo
