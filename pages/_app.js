import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <Helmet>
        <script>
          {`
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-T7H9NMWG');
              `}
        </script>
      </Helmet>
      <meta name="title" content="trezure casa" />
      <meta name="description" content="ultimate destination for luxury furniture and decor. multi-brand luxury store offering modern and contemporary furnishings that redefine elegance." />
      <meta name="keywords" content="decor,furniture,luxury,elegance,modern,indoor,outdoor,trezurecasa,trezure,living,dinining,couch,bedroom,kitchen,65,000 square feet,Campo De Fiori,Magister UT,Carbine, Higold,Artie, Debrah,Modaform." />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

    </Head>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7H9NMWG"
        height="0" width="0" className='hidden sr-only'></iframe>
    </noscript>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
