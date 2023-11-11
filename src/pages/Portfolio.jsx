import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import idea from '../assets/idea.png'
import { Link } from 'react-router-dom'


export const Portfolio = () => {
  return (
    <Box bg={"#F6F6F6"} >
    <Container  py={"100px"} m={"0 auto"} maxW={"1280px"}display={'flex'}flexDirection={'column'}alignItems={'center'}> 
    <Heading fontSize={'32px'}fontWeight={'600'}pb={'45px'}>Portfolio</Heading>

    {/* idea website👇 */}
    <Box display={'flex'}flexDirection={'column'}alignItems={'center'}gap={'100px'}>

      <Box display={'flex'}flexDirection={'column'}alignItems={'center'}gap={'20px'}>
          <Image w={'940px'} src={idea}/>
          <a style={{fontSize:'20px',borderBottom:'1px solid grey',textAlign:'center'}} href={'https://idea.uz/uz'}>online shop idea.uz </a>
      </Box>
      <Box display={'flex'}flexDirection={'column'}alignItems={'center'}gap={'20px'}>
          <Image w={'940px'} src={idea}/>
          <a style={{fontSize:'20px',borderBottom:'1px solid grey',textAlign:'center'}} href={'https://idea.uz/uz'}>online shop idea.uz </a>
      </Box>
      <Box display={'flex'}flexDirection={'column'}alignItems={'center'}gap={'20px'}>
          <Image w={'940px'} src={idea}/>
          <a style={{fontSize:'20px',borderBottom:'1px solid grey',textAlign:'center'}} href={'https://idea.uz/uz'}>online shop idea.uz </a>
      </Box>

    </Box>
    </Container>
  </Box> 
  )
}
