// 1. Import area
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import Section from '../components/Section';

//2. Function defination area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my first Nextjs application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main>
        <Aside/>
        <Section/>
        </main>

      <Footer/>
    </>
  )
}

//3. Export area
export default Home;