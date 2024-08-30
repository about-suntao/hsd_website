import React from 'react'
import styles from './data.module.scss'
import Image from 'next/image'

function Data() {
  const data = [
    {
      id: 1,
      num: '80%+',
      label: 'Teachers with Postgraduate Qualifications',
    }, {
      id: 2,
      num: '1:3',
      label: 'Teacher-student Ratio',
    }, {
      id: 3,
      num: '20+',
      label: 'Course Offerings',
    }, {
      id: 4,
      num: '100%',
      label: 'Enrolment Rate to QS80',
    },
  ]
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <p className={styles.num}>{item.num}</p>
                  <p className={styles.label}>{item.label}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Data
