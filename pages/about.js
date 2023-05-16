import { Box, Text } from "@chakra-ui/react";
import React from "react";

const about = () => {
  return (
    <Box w={'full'}  marginTop={'70px'}>
      <Text fontSize={'20px'} textAlign={'center'} fontWeight={'600'} color={'#41644A'}>Dream Home</Text>
      <Text marginTop={'40px'} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum
        placeat voluptate quo tenetur maiores reiciendis, aspernatur
        voluptatibus repellat distinctio provident aperiam voluptates rerum
        commodi ipsa non? Laborum numquam maiores, nostrum aspernatur, veritatis
        cumque, repellat molestiae omnis odio adipisci tenetur.
      </Text>
    </Box>
  );
};

export default about;
