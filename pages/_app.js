import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="title" content="trezure casa" />
      <meta name="description" content="ultimate destination for luxury furniture and decor. multi-brand luxury store offering modern and contemporary furnishings that redefine elegance." />
      <meta name="keywords" content="decor,furniture,luxury,elegance,modern,indoor,outdoor,trezurecasa,trezure,living,dinining,couch,bedroom,kitchen,65,000 square feet,Campo De Fiori,Magister UT,Carbine, Higold,Artie, Debrah,Modaform." />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
