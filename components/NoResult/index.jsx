import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const NoResult = () => {
  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'}  alignItems={'center'} justifyContent={'center'}>
        <Image src={'./no-result.png'}></Image>
        <Text>No result found...</Text>
    </Box>
  )
}

export default NoResult