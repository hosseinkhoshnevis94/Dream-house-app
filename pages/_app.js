import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '@/styles/globals.css'
import theme from '@/utilities/theme'
import Footer from '@/components/Footer'
import NProgress from 'nprogress'
import { Router } from 'next/router'
import '@/styles/nprogress.css'


export default function App({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})
  Router.events.on('routeChangeStart',()=>{
    NProgress.start()
  })
  Router.events.on('routeChangeComplete',()=>{
    NProgress.done()
  })
return(
  <>
  <Head>

  </Head>
  <Navbar></Navbar>
  <ChakraProvider theme={theme} >
  <Layout>
    <Component {...pageProps}/>
  </Layout>
  </ChakraProvider>
  <Footer></Footer>


  </>
)



}
