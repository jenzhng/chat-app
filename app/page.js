import Head from 'next/head';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chat App with Ably, NextJS Vercel</title>
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?nextjs-vercel" type="image/svg+xml" />
      </Head>
      <main>
        <h1 className="title">Chat App</h1>
        <Chat/>
      </main>
      <footer>
        Made with&nbsp;<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>&nbsp;and&nbsp;<a href="https://ably.com" rel="noopener noreferrer">Ably</a>
        
      </footer>
    </div>
  )
}