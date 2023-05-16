import PropertyCard from "@/components/PropertyCard";
import SearchInputs from "@/components/SearchInputs";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Home.module.css";
import NoResult from "@/components/NoResult";
import { fetchData } from "@/utilities/fetchData";

const search = ({ properties}) => {
  const router = useRouter();
  return (
    <>
      <Box>
        <Box>
          <SearchInputs></SearchInputs>
        </Box>
        <Box>
          {router.query.purpose ? (
            <Text fontSize={"18px"} fontWeight={"600"} color={"#698269"} marginBottom={'25px'} marginTop={'50px'}>
              Here are Properties {router.query.purpose}
            </Text>
          ) : (
            <Text fontSize={"18px"} fontWeight={"600"} color={"#698269"} marginBottom={'25px'} marginTop={'50px'}>
              Your Search result:
            </Text>
          )}
        </Box>
        {properties ?( <SimpleGrid columns={4} spacingX='10px'  spacingY='20px'>
          {properties.map((property) => (
            <PropertyCard property={property}></PropertyCard>
          ))}
        </SimpleGrid>) : <NoResult></NoResult>}
      </Box>
    </>
  );
};
export async function getServerSideProps({ query }) {
  let purpose = query.purpose ;
  let rentFrequency = query.rentFrequency ;
  let minPrice = query.priceMin ;
  let maxPrice = query.priceMax ;
  let minArea = query.areaMin ;
  let maxArea = query.areaMax ;
  let minRooms = query.roomsMin ;
  let maxRooms = query.roomsMax ;
  let minBaths = query.bathsMin ;
  let maxBaths = query.bathsMax;
  let furnishingStatus = query.furnishingStatus ;
  let categoryExternalID = query.categoryExternalID ;
  const data = await fetchData("/properties/list", {
    hitsPerPage:'20',
    purpose: purpose || null,
    rentFrequency: rentFrequency || "monthly",
    priceMin: minPrice || 100,
    priceMax: maxPrice || 1000000,
    areaMin: minArea || 0,
    areaMax: maxArea || 1000000,
    roomsMin: minRooms || 1,
    roomsMax: maxRooms || 100,
    bathsMin: minBaths || 1,
    bathsMax: maxBaths || 100,
    furnishingStatus: furnishingStatus || 'furnished',
    categoryExternalID: categoryExternalID || 4,
  });
  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default search;

