// 1. Import area
import Head from 'next/head'

//2. Function defination area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my first Nextjs application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        header component
      </header>

      <main>
        <aside>aside component</aside>
        <section>section component</section>
        </main>

      <footer>
        footer component
       </footer>
    </>
  )
}

//3. Export area
export default Home;