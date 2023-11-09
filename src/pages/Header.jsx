import { Box, Text, VStack, Heading, Image, Container } from "@chakra-ui/react";
import React from "react";
import logo from '../assets/img.png'

export const Header = () => {
  return (
    <Box bg={'#FFF'}mb={'100px'}>

    <Container maxW={'1280px'} m={'0 auto'}>
      {/* Navbar 👇 */}
      <Box borderBottom={"1px solid #070707"}py={"32px"}fontSize={"19px"}color={"#070707"}display={"flex"}justifyContent={"space-between"}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Skills</Text>
        <Text>Portfoio</Text>
        <Text>Contacts</Text>
      </Box>

      {/* Header 👇 */}
      <Box alignItems={'center'} display={"flex"} justifyContent={"space-between"} py={"30px"}>
        <Heading w={"123px"}lineHeight={"1.2"}fontWeight={"600"}fontSize={"48px"}>Ibro Best</Heading>
        <Box>
          <Text fontSize={'18px'}fontWeight={'600'}>Frontend Dev</Text>
          <Text fontSize={'18px'}fontWeight={'600'}>14 years old, Ibrohim</Text>
        </Box>
          <Heading alignItems={''} transform={'rotate(-90deg)'}color={'#070707'}>ENG <span style={{color:'#828282'}}> | RU</span></Heading>
      </Box>

      {/* Image 👇 */}
        <Image w={'100%'} h={'450px'}objectFit={'cover'} src={logo}/>
    </Container>
    </Box>

  );
};
