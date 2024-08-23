// app/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 域名访问重定向到 /zh
    router.replace('/zh');
  }, [router]);

  return null; // 由于重定向，这里无需返回任何内容
}
