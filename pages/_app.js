import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return  <>
  <Header/>
  <head>
  <meta name="google-site-verification" content="3ZOKJtdIrGhlv-LdRSH2Zulk4dqYsj_woeR6IWB0q10" />
  </head>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
