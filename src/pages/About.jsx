import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <Box bg={"#F6F6F6"} >
      <Container  py={"100px"} m={"0 auto"} maxW={"1280px"}display={'flex'}flexDirection={'column'}alignItems={'center'} textAlign={'center'}> 

          <Heading fontSize={'34px'}fontWeight={'600'} pb={'20px'}>About me</Heading>
          
          <Box display={'flex'}flexDirection={'column'}gap={'25px'}>
            <Text >Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in design and everything connected with it. </Text>
            <Text >I'm studying at courses "Web and mobile design <br /> interfaces" in IT-Academy.</Text>
            <Text >Ready to implement excellent projects <br /> with wonderful people.</Text>
          </Box>
      </Container>
    </Box>
  )
}
