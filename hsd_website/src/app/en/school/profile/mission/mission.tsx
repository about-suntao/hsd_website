import React from 'react'
import styles from './mission.module.scss'
import Image from 'next/image'

import M1 from '../../../../../../public/img/school/M1.webp'
import M2 from '../../../../../../public/img/school/M2.webp'
import M3 from '../../../../../../public/img/school/M3.webp'
import M4 from '../../../../../../public/img/school/M4.webp'


function Mission() {

  const data = [
    {
      id: 1,
      logo: M1,
      title: 'Integrative Inquiry',
      label: "We integrate the strengths of different teaching systems to develop students' international perspective and cross-cultural communication skills. Through inquiry-based learning, students are encouraged to explore, ask questions and solve problems, stimulating their curiosity and creativity.",
    }, {
      id: 2,
      logo: M2,
      title: 'Collaborative Development',
      label: "The school focuses on the synergy between students, teachers and parents, and encourages all parties to actively participate in school affairs through the establishment of an effective communication mechanism to support the overall development of students and the school's continuous progress.",
    }, {
      id: 3,
      logo: M3,
      title: 'Establishing Moral Education',
      label: 'The school takes moral education as one of the core contents of education, focusing on cultivating the qualities of honesty, respect, co-operation and care to guide students to form correct values and outlook on life.',
    }, {
      id: 4,
      logo: M4,
      title: 'Caring for the World',
      label: 'The school advocates the spirit of fraternity and cultivates talents with a global perspective and humanistic care. Through a multicultural curriculum, international exchange programmes and volunteering activities, students become internationally competitive and socially responsible citizens.',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Educational Mission</h2>
        </div>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.logo}>
                    <Image src={item.logo} alt=''></Image>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Mission
