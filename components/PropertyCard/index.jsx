import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineBedroomChild, MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import { TbBathFilled } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import React from "react";
import millify from "millify";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  const {
    externalID,
    coverPhoto,
    isVerified,
    price,
    rentFrequency,
    agency,
    rooms,
    baths,
    area,
    title,
  } = { ...property };
  return (
    <Box
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"15px"}
      boxShadow={"1px 2px 4px rgba(0, 0, 0, 0.25)"}
      overflow={"hidden"}
    >
      <Image
        height={"auto"}
        width={"100%"}
        src={coverPhoto.url}
        // src={"./home.jpg"}
        alt="home house rent buy"
      ></Image>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        rowGap={"15px"}
        justifyContent={"center"}
        w={"full"}
        paddingX={"8px"}
        paddingY={"5px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={`/property/${externalID}`} passHref>
            <Text margin={"0"} textAlign={"left"} width={"100%"}>
              {title.length > 20 ? `${title.substring(0, 20)}...` : title}
            </Text>
          </Link>
          <Image
            src={`${agency?.logo?.url}`}
            width={"40px"}
            mixBlendMode={"darken"}
          ></Image>
        </Box>

        <Flex
          fontSize={"10px"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          columnGap={"5px"}
          width={"100%"}
        >
          <Box color={`${isVerified ? "green" : "red"}`} fontSize={"18px"}>
            {isVerified ? (
              <MdVerified></MdVerified>
            ) : (
              <GoUnverified></GoUnverified>
            )}
          </Box>
          <Box fontSize={"14px"}>
            {millify(price)} AED / {rentFrequency}
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          fontSize={"14px"}
        >
          <Box display={"flex"} alignItems={"center"} columnGap={"5px"}>
            {rooms} <MdOutlineBedroomChild></MdOutlineBedroomChild>
          </Box>
          <Box display={"flex"} alignItems={"center"} columnGap={"5px"}>
            {baths} <TbBathFilled></TbBathFilled>
          </Box>
          <Box display={"flex"} alignItems={"center"} columnGap={"5px"}>
            <BsFillGridFill></BsFillGridFill> {millify(area)} sqft{" "}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyCard;
