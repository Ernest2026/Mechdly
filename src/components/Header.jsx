import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/images/logo.png'

export default function HeaderComponent() {
  return (
    <Flex flexDir={{ md: 'row', base: 'column' }} justifyContent='space-between' alignItems={{ md: 'center' }} gap={{ md: 0, base: '16px' }} padding={{ lg: '28px 64px', md: '28px 32px', base: '28px 16px' }}>
      <Box>
        <Image src={logo} alt="Mechdly logo" height={{ xl: '57px', md: '45px', base: '36px' }} />
      </Box>

      <Flex gap={{ lg: '40px', md: '24px', base: '14px' }} alignItems='center'>
        <Button size={{ md: 'lg', base: 'md' }} variant='outline'>Log in</Button>
        <Button size={{ md: 'lg', base: 'md' }}>Get started</Button>
      </Flex>
    </Flex>
  )
}
