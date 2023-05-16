import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styles from './index.module.css'

const Navbar = () => {
  return (
    <Box width={"100%"} background={'rgb(192 208 227 / 5%)'}  backdropFilter={'blur(6px)'} zIndex={'999'}  position={'sticky'} top={'0px'} >
    <Flex
      
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingTop={"20px"}
      paddingBottom={'20px'}
      maxWidth={'990px'} margin={'auto'}
    >
      <Link href="/">
        <Text
          fontSize={"26px"}
          fontWeight={"400"}
          color={"#41644A"}
          textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"}
          fontFamily={'Righteous'}
        >
          Dream Home
        </Text>
      </Link>
      <List
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={"30px"}
      >
        <ListItem className={styles.listItem}>
          <Link href="/search">Search</Link>
        </ListItem>
        <ListItem  className={styles.listItem}>
          <Link href="/search?purpose=for-rent">Rent property</Link>
        </ListItem>
        <ListItem  className={styles.listItem}>
          <Link href="/search?purpose=for-sale">Buy property</Link>
        </ListItem>
        <ListItem  className={styles.listItem}>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem  className={styles.listItem}>
          <Link href="/contact">Contact us</Link>
        </ListItem>
      </List>
    </Flex>
    </Box>
  );
};

export default Navbar;
