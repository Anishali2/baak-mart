import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/seller/login')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Baak Mart</title>
        <meta name="description" content="Created By Fillinx Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
