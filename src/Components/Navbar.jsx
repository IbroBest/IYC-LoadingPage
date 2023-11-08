import { Box, HStack, Text } from '@chakra-ui/layout'
import React from 'react'

export const Navbar = () => {
  return (
    <Box>
        <HStack>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Skills</Text>
            <Text>Portfoio</Text>
            <Text>Contacts</Text>
        </HStack>
    </Box>
  )
}
