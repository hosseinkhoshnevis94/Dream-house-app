import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./index.module.css";

const AvailableCities = ({ cities }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"120px"}
      flexDirection={"column"}

      padding={"25px"}
      borderRadius={"25px"}
    >
      <Text
        color={"#41644A"}
        as={"h3"}
        fontSize={"24px"}
        fontWeight={"600"}
        paddingBottom={"50px"}
      >
        We are available in this countries
      </Text>
      <HStack
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {cities.map((city, index) => (
          <Box id={city.id} position={"relative"}>
            <Image src={city.imgUrl} borderRadius={"35px"}></Image>
            <Text
              className={styles.cityTitle}
              position={"absolute"}
              top={"20%"}
              left={"50%"}
              translateX={"-50%"}
              translateY={"-50%"}
              fontSize={"16px"}
              fontWeight={"500"}
              width={"100%"}
              textAlign={"center"}
              backgroundColor={"rgba(35,35,35,0.25);"}
              paddingY={"6px"}
            >
              {city.name}
            </Text>
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default AvailableCities;


