import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import TestimonialsCardComponent from './Card'

const testimonials = [
  {
    title: 'Emeka and Sons',
    subTitle: 'A great platform for my business. Was not getting enought time for my customers until I was introduced to mechdly.'
  },
  {
    title: 'Sam Automobile',
    subTitle: 'Everything is organized now, clients are happy and I am happy. Superb platform!'
  },
  {
    title: 'Chima’s Fixes',
    subTitle: 'Happy I took the advice, this is the level of professionality my clients want to see. Goes hand in hand with my skills. Love it!'
  },
]

export default function TestimonialsComponent() {
  return (
    <Flex position='relative' padding={{ lg: '128px 64px', md: '128px 32px', base: '64px 16px' }} alignItems='center' flexDirection='column'>
      <Heading size={{ xl: '2xl', md: 'xl', base: 'lg' }} fontWeight={500} marginBottom={18.5} textAlign='center' width={{xl: '60%', md: '80%'}}>WHAT OTHER MECHANICS SAY ABOUT THE EXPERIENCE</Heading>
      <Flex flexDir={{md: 'row', base: 'column-reverse'}} justifyContent='space-between'>
        {
          testimonials.map((testimonial, idx) => <TestimonialsCardComponent key={idx} testionial={testimonial} />)
        }
      </Flex>

      <Box position='absolute' filter='blur(100px)' borderRadius={9999} height={{lg: '150%', md: '100%'}} aspectRatio={1 / 1} top='0' right='-50%' zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box>
      <Box position='absolute' filter='blur(100px)' borderRadius={9999} height={{lg: '150%', md: '100%'}} aspectRatio={1 / 1} top='0' left='-50%' zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box>
    </Flex>
  )
}
