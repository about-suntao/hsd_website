'use client';
import ZhHeader from "@/components/layout/headerZh/page"
import ZhFooter from "@/components/layout/footerZh/page"
import EnHeader from "@/components/layout/headerEn/page"
import EnFooter from "@/components/layout/footerEn/page"
import { usePathname } from 'next/navigation';
import styles from './not-found.module.scss'
import Image from "next/image";
import { useRouter } from "next/navigation";

import picture404 from '../../public/img/home/404.webp'


const ZhComponent = () => {
  const router = useRouter()
  const backHome = () => {
    router.push('/zh')
  }
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={picture404} alt=""></Image>
        </div>
        <div className={styles.error}>
          <h3>错误</h3>
          <p>很抱歉，您要访问的页面地址有误，或者该页面不存在。</p>
          <div className={styles.btn}>
            <button onClick={() => backHome()}>返回首页</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const EnComponent = () => {
  const router = useRouter()
  const backHome = () => {
    router.push('/en')
  }
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={picture404} alt=""></Image>
        </div>
        <div className={styles.error}>
          <h3>Error</h3>
          <p>Sorry</p>
          <p>The page you are looking for is incorrect</p>
          <p>Or the page does not exist</p>
          <div className={styles.btn}>
            <button onClick={() => backHome()}>Back Home</button>
          </div>
        </div>
      </div>
    </div>
  )
}





export default function NotFound() {
  const pathname = usePathname();

  // 根据路径前缀判断语言
  const isZh = pathname.startsWith('/zh');

  return (
    <div>
      {isZh ? (
        <>
          <ZhHeader></ZhHeader>
          <ZhComponent></ZhComponent>
          <ZhFooter></ZhFooter>
        </>
      ) : (
        <>
          <EnHeader></EnHeader>
          <EnComponent></EnComponent>
          <EnFooter></EnFooter>
        </>
      )}
    </div>
  );
}
