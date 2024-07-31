import React from 'react'
import logo from '../assets/images/logo.png'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

export default function ReadyForSetupComponent() {
  return (
    <Flex justifyContent={{md: 'space-between', base: 'center'}} alignItems='center' padding={{lg: '0px 64px', md: '0px 32px', base: '0px 16px'}}>
      <Box display={{md: 'block', base: 'none'}}>
        <Image src={logo} alt="Mechdly logo" height={{xl: '57px', base: '45px'}} />
      </Box>

      <Flex flexDir={{md: 'row', base: 'column'}} alignItems='center' gap={{lg: '40px', base: '20px'}}>
        <Heading textAlign={{md: 'initial', base: 'center'}} size={{ xl: '2xl', lg: 'lg', md: 'md', base: 'lg' }}>Ready for your setup?</Heading>
        <Button >Get started</Button>
      </Flex>
    </Flex>
  )
}
