import {
  Box,
  Card,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PropertyCard from "../PropertyCard";
import Link from "next/link";

const PropertySection = ({ properties, title, linkTo }) => {
  return (
    <Flex flexDirection={"column"} marginTop={"100px"}>
      <Box
        display={"flex"}
        paddingBottom={"25px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text  fontSize={'24px'}  fontWeight={'600'} color={'#41644A'}>
          {title}
        </Text>
        <Link href={`${linkTo}`}>
          <Text
            color={"#41644A"}
            textDecoration={"none"}
            padding={"5px 10px"}
            borderRadius={"8px"}
            border={"1px solid #41644A"}
          >
            Find more Projects...
          </Text>
        </Link>
      </Box>
      <SimpleGrid columns={4} spacingX="10px" spacingY="20px">
        {properties.map((property) => (
          <PropertyCard property={property}></PropertyCard>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default PropertySection;
