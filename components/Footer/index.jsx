import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      padding={"30px 60px"}
      marginTop={"200px"}
      justifyContent={"space-between"}
      alignItems={"stretch"}
      minHeight={"200px"}
      background={"#efefef"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"flex-start"}
        rowGap={"20px"}
      >
        <Text
          fontSize={"26px"}
          fontWeight={"400"}
          color={"#41644A"}
          textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"}
          fontFamily={'Righteous'}
        >
          Dream Home
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <AiOutlineInstagram></AiOutlineInstagram>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <FaTelegramPlane></FaTelegramPlane>
          </Link>
          <Link href={"/"}>
            <AiOutlineWhatsApp></AiOutlineWhatsApp>
          </Link>
          <Link href={"/"}>
            <AiOutlineTwitter></AiOutlineTwitter>
          </Link>
          <Link href={"/"}>
            <BsFacebook></BsFacebook>
          </Link>
        </Box>
      </Flex>
      <Flex flexDirection={"column"} rowGap={"10px"}>
        <Text>Projects</Text>
        <Text>Our Projects</Text>
        <Text>Our Plans</Text>
        <Text>Become a member</Text>
      </Flex>
      <Flex flexDirection={"column"} rowGap={"10px"}>
        <Text>Support</Text>
        <Text>Contact Us</Text>
        <Text>Help</Text>
      </Flex>
      <Flex flexDirection={"column"} rowGap={"10px"}>
        <Text>Get The Latest News & Offers</Text>
        <Input placeholder="Email address" padding={'5px 10px'} borderRadius={'30px'} fontSize={'12px'}></Input>
        <Button color={'white'} padding={'1px 8px'} background={'#41644A'} borderRadius={'30px'}>Subscribe</Button>
      </Flex>
    </Flex>
  );
};

export default Footer;
