import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import maleMemojiIcon from '../../assets/images/male-memoji.png'

export default function TestimonialsCardComponent({ testionial }) {
    return (
        <Box borderRadius={40} borderWidth={3} borderColor='#BBA18F' padding='32px 16px' marginTop='38px' width={{ md: '32%' }} bgGradient={'radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'}>
            <Flex justifyContent='flex-end'>
                <Flex bg='yellow.500' width={70} height={70} borderRadius={70} alignItems='center' justifyContent='center'>
                    <Image src={maleMemojiIcon} alt='Male emoji' />
                </Flex>
            </Flex>
            <Heading size={{ xl: 'lg', base: 'md' }} marginTop='28px' marginBottom='18px'>{testionial.title}</Heading>
            <Text fontSize='lg' fontWeight={400}>{testionial.subTitle}</Text>
        </Box>
    )
}
