import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Real state application</title>
    </Head>
    <Box maxWidth={'990px'} m={'auto'}>
        <main>{children}</main>
    </Box>
    </>
  )
}

export default Layout