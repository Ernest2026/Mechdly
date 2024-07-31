import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import invoiceIcon from '../../assets/svgs/invoice.svg'
import notificationIcon from '../../assets/svgs/notification.svg'
import paymentIcon from '../../assets/svgs/payment.svg'
import scheduleIcon from '../../assets/svgs/schedule.svg'
import smsIcon from '../../assets/svgs/sms.svg'
import ServicesCardComponent from './Card'

const servicesOptions = [
  {
    icon: scheduleIcon,
    title: 'Scheduling',
    subTitle: 'Let your clients choose the most efficient time to meet with you and fix their car issues.'
  },
  {
    icon: paymentIcon,
    title: 'Payment gateway',
    subTitle: 'An efficient payment system worthy of your services.'
  },
  {
    icon: invoiceIcon,
    title: 'Generalize invoice',
    subTitle: 'Get your receipts and invoices for payment proof.'
  },
  {
    icon: notificationIcon,
    title: 'Send reminders',
    subTitle: 'Let’s remind you and your clients about the upcoming meetings before time.'
  },
  {
    icon: smsIcon,
    title: 'Send SMS',
    subTitle: 'Stay on the loop with all your business activities with our SMS notifications.'
  },
]

export default function ServicesComponent() {
  return (
    <Box position='relative' padding={{lg: '64px', md: '64px 32px', base: '64px 16px'}}>
      <Heading size={{ xl: '2xl', md: 'xl', base: 'lg' }} fontWeight={500} marginBottom={18.5} textAlign='center'>SERVICES WE OFFER</Heading>
      <Flex flexDir={{md: 'row', base: 'column-reverse'}} justifyContent='center' flexWrap='wrap' gap={{xl: '5%', base: '2%'}}>
        {
          servicesOptions.map((service, idx) => <ServicesCardComponent key={idx} service={service} />)
        }
      </Flex>

      <Box position='absolute' filter='blur(100px)' borderRadius={9999} height='80%' aspectRatio={1 / 1} top='25%' right='30%' zIndex={6} bgGradient='linear(159.19deg, #FFFFFB -19.37%, rgba(255, 254, 244, 0.94238) -16.87%, rgba(255, 251, 219, 0.74684) -7.55%, rgba(255, 249, 196, 0.56902) 2.47%, rgba(255, 246, 176, 0.41564) 12.98%, rgba(255, 244, 160, 0.28668) 24.07%, rgba(255, 243, 146, 0.18178) 35.93%, rgba(255, 242, 136, 0.10085) 48.83%, rgba(255, 241, 129, 0.04367) 63.32%, rgba(255, 240, 124, 0.01017) 80.67%, rgba(255, 240, 123, 0) 108.53%)'></Box>
    </Box>
  )
}
