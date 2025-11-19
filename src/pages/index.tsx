// src/pages/index.tsx
import Head from 'next/head'
import Hero from '../components/layout/Hero'

export default function Home(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Little Flower - Kids Play School</title>
        <meta name="description" content="Bright minds building castles of imagination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <Hero />
      </div>
    </>
  )
}
