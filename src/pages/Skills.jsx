import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => {
  return (
    <Box bg={"#FFF"} >
      <Container  py={"100px"} m={"0 auto"} maxW={"1280px"}display={'flex'}flexDirection={'column'}alignItems={'center'} textAlign={'center'}> 
        <Heading>Skills</Heading>
        <Heading>I learned programming in <a style={{color:'#00caff'}} href='https://www.datatalim.uz/'>Data-talim-stansiyasi</a></Heading>
      </Container>
    </Box>
  )
}
