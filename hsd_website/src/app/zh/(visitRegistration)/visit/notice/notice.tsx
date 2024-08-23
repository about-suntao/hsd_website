'use client'
import React, { useState } from 'react'
import styles from './notice.module.scss'
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

function Notice({ changeCurrent }: any) {

  const [isRead, setIsRead] = useState(true)

  const onChange: CheckboxProps['onChange'] = (e) => {
    setIsRead(!e.target.checked)
  };
  return (
    <div className={styles.notice}>
      <h2>预约须知</h2>
      <h3>预约说明：</h3>
      <p>亲爱的学生及家长：</p>
      <p className={styles.retract}>感谢您对北京理工大学A-Level国际本科项目的关注和支持，为了让学生及家长在报考之前对大学有更深入的了解，我校即日起开放招生咨询及校园参观预约系统，欢迎各位学生和家长实地探访学校，咨询招生信息。</p>
      <h3>入校注意事项：</h3>
      <p className={styles.retract}>1、北京理工大学是重要的教学科研场所，报名及参观咨询过程中大学不收取任何费用，成功报名人员即可入校参观。</p>
      <p className={styles.retract}>2、请真实填写报名信息，我们会对您在预约系统上填写信息进行保护，请放心填写。预约完成后，请保持手机通讯畅通，招生老师会和您核对入校事项。</p>
      <p className={styles.retract}>3、预约成功后，请合理安排时间，建议在预约时间15分钟前抵达校园。</p>
      <p className={styles.retract}>4、自驾车辆请提前报备车辆信息，入校后配合我校安保人员的指引在指定停车场停车。</p>
      <p className={styles.retractTop}>北京理工大学是重要的教学科研场所，入校期间，配合学校维护好日常教学科研的良好环境。呼吁参观人员文明参观，自觉维护校园秩序、爱护校园环境。</p>
      <p className={styles.retract}>如有任何问题，欢迎您与我们联系，咨询热线：010-68917899</p>
      <p className={styles.retract}>我们将在北京理工大学的校园里，欢迎您的到来！</p>
      <div className={styles.btn}>
        <div className={styles.read}>
          <Checkbox onChange={onChange}>我已经仔细阅读预约须知</Checkbox>
        </div>
        <Button type="primary" disabled={isRead} onClick={() => changeCurrent(1)}>下一步</Button>
      </div>
    </div>
  )
}

export default Notice
