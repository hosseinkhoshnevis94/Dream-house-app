import ImageScrollBar, { Slider } from "@/components/Slider/Index";
import { fetchData } from "@/utilities/fetchData";
import { Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import React from "react";
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";

const propertyDetail = ({ propertyData:{photos,rooms,baths,area,title,description,amenities,purpose,type} }) => {
    console.log(amenities);
  return <Box>
    <Box width={'100%'} marginTop={'50px'} objectFit={'cover'} height={'400px'} marginX={'auto'} >
    <Slider images={photos}></Slider>
    </Box>
    <Flex
          justifyContent={"flex-start"}
          columnGap={'20px'}
          alignItems={"center"}
          width={"100%"}
          fontSize={"18px"}
          marginY={'30px'}
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
    <Box>
        <Text fontSize={'20px'} fontWeight={'700'} paddingY={'15px'}>{title}</Text>
        <Text paddingY={'15px'} textAlign={'justify'}>{description}</Text>
    </Box>
    <Box display={'flex'} justifyContent={'flex-start'} columnGap={'10px'}>
    <Text backgroundColor={'#E1E0D0'} border={'1px solid rgba(0, 0, 0, 0.25)'} boxShadow={'1px 2px 5px rgba(0, 0, 0, 0.1)'} borderRadius={'10px'} padding={'4px 8px'}>{purpose}</Text>
    <Text backgroundColor={'#E1E0D0'} border={'1px solid rgba(0, 0, 0, 0.25)'} boxShadow={'1px 2px 5px rgba(0, 0, 0, 0.1)'} borderRadius={'10px'} padding={'4px 8px'}>{type}</Text>
    </Box>
 

    {amenities &&(<Text fontSize={'20px'} fontWeight={'700'} paddingY={'25px'}>Facilities:</Text>)}
    {amenities &&( <Box display={'flex'} justifyContent={'flex-start'} gap={'10px'} flexWrap={'wrap'}>{amenities.map(item => <Text backgroundColor={'#E1E0D0'} border={'1px solid rgba(0, 0, 0, 0.25)'} boxShadow={'1px 2px 5px rgba(0, 0, 0, 0.1)'} borderRadius={'10px'} padding={'4px 8px'}>{item.text}</Text> )}</Box> )}
    
  </Box>;
};

export default propertyDetail;

export async function getServerSideProps({ params }) {
  const data = await fetchData("/properties/detail", { externalID: params.id });
  return {
    props: {
      propertyData:data
    },
  };
}
