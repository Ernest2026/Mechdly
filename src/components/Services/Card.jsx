import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ServicesCardComponent({ service }) {
    return (
        <Box borderRadius={40} borderWidth={3} borderColor='#BBA18F' padding='32px 16px' marginTop='38px' width={{ xl: '30%', md: '32%' }} bgGradient={'radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'}>
            <Flex alignItems='center' justifyContent='center'>
                <Flex bg='yellow.500' width={70} height={70} borderRadius={70} alignItems='center' justifyContent='center'>
                    <Image src={service.icon} alt='Schedule icon' />
                </Flex>
            </Flex>
            <Heading size={{ xl: 'lg', base: 'md' }} marginTop='28px' marginBottom='18px'>{service.title}</Heading>
            <Text fontSize='lg' fontWeight={400}>{service.subTitle}</Text>
        </Box>
    )
}
