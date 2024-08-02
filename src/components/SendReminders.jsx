import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import reminderIllustration from '../assets/images/reminder-illustration.png'

export default function SendReminderComponent() {
    return (
        <Flex position='relative' flexDir={{ md: 'row', base: 'column-reverse' }} gap={{ md: 0, base: '24px' }} justifyContent='space-between' alignItems='center' padding={{ lg: '100px 64px', md: '100px 32px', base: '50px 16px' }}>
            <Flex flexDir='column' alignItems={{ md: 'flex-start', base: 'center' }} width={{ md: '48%' }} zIndex={{md: 'initial', base: 7}}>
                <Heading size={{ xl: '3xl', md: '2xl', base: 'xl' }} fontWeight={500} textAlign={{ md: 'initial', base: 'center' }}>Send reminders, SMS and invoices to customers.</Heading>
                <Button marginTop={{ xl: 10, base: 6 }}>Setup now</Button>
            </Flex>
            <Flex flexDir='column' width={{ md: '50%' }} zIndex={3}>
                <Image src={reminderIllustration} alt='Schedule Payment Illustration' />
            </Flex>

            <Box position='absolute' filter='blur(100px)' borderRadius={9999} height={{md: '150%', base: '100%'}} aspectRatio={1 / 1} top='5%' right='-50%' zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box>
        </Flex>
    )

}
