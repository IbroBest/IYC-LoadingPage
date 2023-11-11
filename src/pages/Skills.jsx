import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/html,js,css.png'
import star from '../assets/star.svg'

export const Skills = () => {
  return (
    <Box bg={"#FFF"} >
      <Container  py={"100px"} m={"0 auto"} maxW={"1280px"}display={'flex'}flexDirection={'column'}alignItems={'center'} textAlign={'center'}> 
        <Heading fontSize={'32px'}fontWeight={'600'}pb={'60px'}>Skills</Heading>
        <Heading pb={'80px'} fontSize={'18px'}>I learned programming in <a style={{fontSize:'18px',color:'#00caff'}} href='https://www.datatalim.uz/'>Data-talim-stansiyasi</a></Heading>
        <Box display={'flex'} w={'100%'}justifyContent={'space-around'}>
          <Box alignItems={'center'} display={'flex'}flexDirection={'column'}>
            <Image mb={'30px'} w={'400px'} src={img}/>
            <Image w={'200px'} src={star}/>
          </Box>

          <Box  alignItems={'center'} display={'flex'}flexDirection={'column'}>
            <Image mb={'30px'} w={'400px'} src={img}/>
            <Image w={'200px'} src={star}/>
          </Box>
        </Box>
      </Container>
    </Box> 
  )
}
