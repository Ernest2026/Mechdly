import { Box, Button, Divider, Flex, Heading, Image, Input, InputGroup, Link, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from '../assets/svgs/fi_facebook.svg'
import instagram from '../assets/svgs/fi_instagram.svg'
import linkedin from '../assets/svgs/fi_linkedin.svg'
import twitter from '../assets/svgs/fi_twitter.svg'

export default function FooterComponent() {
  return (
    <Flex flexDir='column' padding={{ lg: '48px 64px', md: '48px 32px', base: '48px 16px' }}>
      <Divider borderTopWidth={1} borderColor='yellow.500' />
      <Flex flexDir={{ md: 'row', base: 'column' }} gap={{ md: 0, base: '48px' }} paddingTop='48px' justifyContent='space-between'>
        <Box width={{ md: '45%' }}>
          <Heading display={{ md: 'block', base: 'none' }} textAlign={{ md: 'initial', base: 'center' }} size={{ xl: '3xl', lg: '2xl', base: 'xl' }} lineHeight='86px'>Subscribe to<br /> our newsletter!</Heading>
          <Heading display={{ md: 'none' }} textAlign={{ md: 'initial', base: 'center' }} size={{ xl: '3xl', lg: '2xl', base: 'xl' }} lineHeight='86px'>Subscribe to our newsletter!</Heading>
          <InputGroup borderRadius={40} borderWidth='3px' borderColor='#BBA18F' overflow='hidden' marginTop='35px' backdropFilter='blur(21px)' bgGradient={'radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)'} >
            <Input type='email' placeholder='Email address' fontSize='xl' borderWidth='0' paddingLeft={{ md: '40px' }} paddingTop='24px' paddingBottom='24px' _placeholder={{ color: 'inherit' }} />
            {/* <InputRightElement pointerEvents='none' minWidth='100px' height='100%'> */}
            <Button width={{ md: 'auto', base: '120px' }}>Sign up</Button>
            {/* </InputRightElement> */}
          </InputGroup>
        </Box>
        <Flex width={{ xl: '50%', md: '53%' }} flexDir='row' justifyContent='space-between' >
          <Flex flexDirection={{ base: 'column' }} width='32%' alignItems={{ md: 'initial', base: 'center' }}>
            <Heading fontSize={{ lg: '30px', md: '2xl' }}>Company</Heading>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>About Us</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Partners & Affiliates</Link>
          </Flex>
          <Flex flexDirection={{ base: 'column' }} width='32%' alignItems={{ md: 'initial', base: 'center' }}>
            <Heading fontSize={{ lg: '30px', md: '2xl' }}>Products</Heading>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>How it Works</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Features</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Pricing</Link>
          </Flex>
          <Flex flexDirection={{ base: 'column' }} width='32%' alignItems={{ md: 'initial', base: 'center' }}>
            <Heading fontSize={{ lg: '30px', md: '2xl' }}>Support</Heading>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Contact Us</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>FAQs</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Privacy</Link>
            <Link href='#' display='block' textAlign={{ md: 'initial', base: 'center' }} fontSize={{ lg: 'xl', md: 'lg' }} fontWeight={500} marginTop='8px'>Terms</Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={{ md: 'row', base: 'column' }} justifyContent={{ md: 'space-between' }} alignItems={{ md: 'initial', base: 'center' }} gap={{ md: 0, base: '24px' }} marginTop={{ md: '120px', base: '48px' }}>
        <Flex gap='14px'>
          <Image src={twitter} alt="Twitter" />
          <Image src={facebook} alt="Facebook" />
          <Image src={instagram} alt="Instagram" />
          <Image src={linkedin} alt="Linkedin" />
        </Flex>
        <Text fontSize='md' textAlign={{ md: 'initial', base: 'center' }}>&#169; 2022. FixBot Technologies Limited. All Rights Reserved.</Text>
      </Flex>
    </Flex>
  )
}
