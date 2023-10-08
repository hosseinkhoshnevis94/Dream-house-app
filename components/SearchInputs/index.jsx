import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import { filterData } from "@/utilities/filterData";
import { useRouter } from "next/router";
const SearchInputs = () => {
  const router = useRouter();

const filterProperties = (queryName,queryValue) =>{
  const {query} = router
  query[queryName.toString()] = queryValue
  router.push({ query: query })
}
  return (
    <Flex
      justifyContent={"flex-start"}
      flexWrap={"wrap"}
      borderBottom={"1px solid #dfdfdf"}
      paddingY={"15px"}
      marginTop={"50px"}
    >
      {filterData.map((selecBox) => (
        <Select
          onChange={(e) =>
            filterProperties(selecBox.queryName, e.target.value)
          }
          w={"fit-content"}
          paddingY={"5px"}
          paddingX={"5px"}
          key={selecBox.queryName}
          placeholder={selecBox.placeholder}
        >
          {selecBox?.items?.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      ))}
    </Flex>
  );
};

export default SearchInputs;
