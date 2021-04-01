// Next dependencies
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

// App styles
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

// App Function
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Styled nextjs - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e20e8d" />
        <meta name="description" content="Nextjs styled boilerplate" />
      </Head>
      <NextNprogress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right"/>
    </>
  )
}

// Prop Types
App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}