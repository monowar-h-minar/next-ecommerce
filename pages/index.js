import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/shared/Footer'
import Header from '../component/shared/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
      <Header/>
        
      

      

    
    
      </main>

      <Footer/>
    </div>
  )
}
