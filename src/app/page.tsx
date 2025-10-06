import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Proof from '@/components/Proof';
import Benefits from '@/components/Benefits';
import Catalog from '@/components/Catalog';
import Authority from '@/components/Authority';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. Asai Metal - Otomasi Pabrik Terbaik</title>
        <meta name="description" content="Transformasikan pabrik Anda dengan mesin, robot & otomasi. Solusi otomasi lengkap dari PT. Asai Metal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Proof />
      <Benefits />
      <Catalog />
      <Authority />
      <CTA />
      <Footer />
    </>
  );
}
