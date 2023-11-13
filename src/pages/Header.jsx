import { Box, Text, VStack, Heading, Image, Container } from "@chakra-ui/react";
import {React, useEffect, useRef}from "react";
import logo from "../assets/img.png";
import { TweenMax,Power3 } from "gsap";

export const Header = () => {

    let imgItem = useRef(null)
    let textItem = useRef(null)
    let titleItem = useRef(null)
    let langItem = useRef(null)

    useEffect(()=>{
        console.log(imgItem)
        TweenMax.to(
          imgItem,
          8,
          {
            opacity:'1',
            y:-10,
            ease:Power3.easeOut,
            delay:.2

          }
        )
        TweenMax.to(
          textItem,
          8,
          {
            opacity:'1',
            y:-10,
            ease:Power3.easeOut,
            delay:.1
          }
        )
        TweenMax.to(
          titleItem,
          8,
          {
            opacity:'1',
            y:-10,
            ease:Power3.easeOut,
            delay:.1
          }
        )
        TweenMax.to(
          langItem,
          8,
          {
            opacity:'1',
            y:-10,
            ease:Power3.easeOut,
            delay:.1
          }
        )

    },[])

  return (
    <Box bg={"#FFF"} mb={"100px"}>
      <Container maxW={"1280px"} m={"0 auto"}>
        {/* Navbar 👇 */}
      <Box  borderBottom={"1px solid #070707"}py={"32px"}fontSize={"19px"}color={"#070707"}display={"flex"}justifyContent={"space-between"}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Skills</Text>
        <Text>Portfoio</Text>
        <Text>Contacts</Text>
      </Box>
        {/* Header 👇 */}
        <Box alignItems={"center"}display={"flex"}justifyContent={"space-between"}py={"30px"}>
          <Heading opacity={'0'} ref={el =>{titleItem = el}} w={"123px"}lineHeight={"1.2"}fontWeight={"600"}fontSize={"48px"}>Ibro Best</Heading>
          <Box opacity={'0'} ref={el =>{textItem = el}}>
            <Text  fontSize={"18px"} fontWeight={"600"}>Frontend Dev</Text>
            <Text  fontSize={"18px"} fontWeight={"600"}>14 years old, Ibrohim</Text>
          </Box>
          <Heading opacity={'0'} ref={el =>{langItem = el}} alignItems={""}transform={"rotate(-90deg)"}color={"#070707"}>ENG <span style={{ color: "#828282" }}> | RU</span>
          </Heading>
        </Box>

        {/* Image 👇 */}
        <Image opacity={'0'} ref={el =>{imgItem = el}} w={"100%"} h={"450px"} objectFit={"cover"} src={logo} />
      </Container>
    </Box>
  );
};
