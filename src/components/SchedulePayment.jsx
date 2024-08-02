import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import schedulePaymentIllustration from '../assets/images/schedulepayment-illustration.png'

export default function SchedulePaymentComponent() {
    return (
        <Flex position='relative' flexDir={{ md: 'row', base: 'column-reverse' }} justifyContent={{ md: 'space-between' }} gap={{ md: 0, base: '24px' }} alignItems='center' padding={{ lg: '100px 64px', md: '100px 32px', base: '40px 16px' }}>
            <Flex flexDir='column' alignItems={{ md: 'flex-start', base: 'center' }} width={{ md: '45%' }} zIndex={{md: 'initial', base: '7'}}>
                <Heading display={{ md: 'block', base: 'none' }} size={{ xl: '3xl', md: '2xl', base: 'xl' }} fontWeight={500}>Schedule,<br /> Make Payments, & Send invoice to your customers.</Heading>
                <Heading textAlign='center' display={{ md: 'none' }} size={{ xl: '3xl', md: '2xl', base: 'xl' }} fontWeight={500}>Schedule, Make Payments, & Send invoice to your customers.</Heading>
                <Text textAlign={{ md: 'initial', base: 'center' }} fontWeight={400} marginTop={{ md: 7, base: 4 }}>Efficiently and professionally run your business and with your clients eliminating the complaints of your customers so you can go back to work.</Text>
                <Button marginTop={{ xl: 10, base: 6 }}>Get started now</Button>
            </Flex>
            <Flex flexDir='column' width={{ md: '55%' }} zIndex={3}>
                <Image src={schedulePaymentIllustration} alt='Schedule Payment Illustration' />
            </Flex>

            <Box position='absolute' filter='blur(100px)' borderRadius={9999} height={{ lg: '150%', base: '100%' }} aspectRatio={1 / 1} top='5%' right={{md: '-50%', base: '-80%'}} zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box>
            {/* <Box position='absolute' filter='blur(100px)' borderRadius={9999} height={{md: '150%', base: '100%'}} aspectRatio={1 / 1} top='5%' right='-50%' zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box> */}
        </Flex>
    )

}
