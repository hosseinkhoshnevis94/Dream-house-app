import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import globalStyles from '../../styles/Home.module.css'
import Link from "next/link";


const FindHome = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"flex-start"}  marginTop={"250px"} 
    backgroundColor={'#E1E0D0'} padding={'25px 50px'} borderRadius={'25px'} columnGap={'50px'}>
      <Box >
        <Text as={'h3'} fontSize={'24px'}  fontWeight={'600'} color={'#41644A'}>Apartments and houses</Text>
        <Text marginTop={'10px'}>find out the best home<br /> suitable for you</Text>
        <Image marginTop={'30px'} src="./findHome-pic.png"></Image>
      </Box>
      <Box alignSelf={'center'}>
        <Image borderRadius={'25px'} src="./findHome-pic2.png"></Image>
      </Box>
      <Box height={'300px'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'} rowGap={'30px'} width={'300px'} >
        <Text fontSize={'18px'}>Find your new home</Text>
        <UnorderedList fontSize={'14px'} rowGap={'10px'} display={'flex'} flexDirection={'column'} padding={'0'} paddingLeft={'7px'}>
          <ListItem>Renting your first apartmentcan be chalenging</ListItem>
          <ListItem>
            the age of majority is typicallywhen you can rent an apartment
          </ListItem>
          <ListItem>
            most states set the age ofmajority at 18, but there are a
            few exceptions
          </ListItem>
        </UnorderedList>
        <Link href={'/search'} className={`${globalStyles.bannerBtn}`}>Book Now</Link>
      </Box>
    </Flex>
  );
};

export default FindHome;
