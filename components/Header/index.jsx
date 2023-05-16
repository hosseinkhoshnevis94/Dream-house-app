import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      marginTop={"100px"}
      marginRight={"auto"}
      justifyContent={"space-between"}
    >
      <Box marginTop={"50px"} display={"flex"} flexDirection={"column"}>
        <Text fontSize={"16px"} fontWeight={"300"} color={"#41644A"}>
          Rent a Home
        </Text>
        <Text fontSize={"30px"} fontWeight={"600"} color={"#41644A"}>
          Rental Home For Everyones
        </Text>
        <Text fontSize={"16px"} fontWeight={"300"} marginTop={"40px"}>
          Wxplore From Apartments, Builder Floors Villas and more...
        </Text>
        <Link href={"/search"} className={styles.headerBtn}>
          Explore Renting
        </Link>
      </Box>
      <Box position={"relative"}>
        {/* <Image src='../../public/images/header.png' ></Image> */}
        <Image src={"/header.png"} alt="hello" marginRight={"100px"}></Image>
        <Image
          src="/Ellipse1.png"
          position={"absolute"}
          top={"23px"}
          right={"30px"}
          width={"530px"}
        ></Image>
      </Box>
    </Flex>
  );
};

export default Header;
