import React from 'react'
import styles from './index.module.css'
import globalStyles from '../../styles/Home.module.css'
import {Button, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Banner = () => {
  return (
    <Flex 
    marginTop={"150px"}
    marginRight={"auto"}
    justifyContent={"space-between"}
    alignItems={'center'}

    flexDirection={'column'}
    position={'relative'}
    >
    <Text className={styles.title} fontSize={"24px"}
        fontWeight={"600"} color={'#41644A'} >Specialized in housing and offices</Text>
    <Text className={styles.text} marginTop={'50px'} width={"340px"}>The orginal interior designed by archticetsfrom uitrips studio offers concierge servicesto arrange anything you need</Text>
    <br />
    <Text  className={styles.text} width={"340px"}>we also build traditional construction methods of wood frame houses, affording freedom of design and creativity and yield unique and beautiful resaults.</Text>
    <br />
    <Link href={'/search'} className={`${globalStyles.bannerBtn} ${styles.btn}`} >Explore Now</Link>
<Image className={styles.rightImage} src='/banner-pic1.png' position={'absolute'} ></Image>
<Image className={styles.leftImage} src='/banner-pic2.png' position={'absolute'}  ></Image>
<Image  src='/banner-bg.png' width={'780px'} position={'absolute'} zIndex={'-99'}></Image>
    </Flex>
  )
}
export default Banner