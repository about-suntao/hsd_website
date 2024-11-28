'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './page.module.scss'
import Image from 'next/image';
import zhImg from '../../../public/img/home/zh.svg'
import enImg from '../../../public/img/home/en.svg'


export default function SwitchLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  const [current, setCurrent] = useState('')

  const switchToLocale = (locale: any) => {
    const currentLocale = pathname.split('/')[1];
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  useEffect(() => {
    setCurrent(pathname.split('/')[1])
  }, [])

  return (
    <div className={styles.switch}>
      {
        current === 'zh' ?
          <p>语言：</p> :
          <p>Language：</p>
      }
      {
        current === 'zh' ?
          <Image src={enImg} alt='' onClick={() => switchToLocale('en')}></Image> :
          <Image src={zhImg} alt='' onClick={() => switchToLocale('zh')}></Image>
      }
    </div>
  );
}
