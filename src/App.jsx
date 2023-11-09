import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <Container  >
      <Header />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      {/* <Contact /> */} 
      </Container>
  );
};
