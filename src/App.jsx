import { Box, ChakraProvider } from '@chakra-ui/react'
import HeaderComponent from './components/Header'
import SchedulePaymentComponent from './components/SchedulePayment'
import { theme } from './constants/theme'
import Fonts from './constants/theme/fonts'
import AvailableTimeComponent from './components/AvailableTime'
import SendReminderComponent from './components/SendReminders'
import ServicesComponent from './components/Services'
import TestimonialsComponent from './components/Testimonials'
import ReadyForSetupComponent from './components/ReadyForSetup'
import FooterComponent from './components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box maxWidth='1440px' margin='0 auto'>
        <HeaderComponent />
        <SchedulePaymentComponent />
        <AvailableTimeComponent />
        <SendReminderComponent />
        <ServicesComponent />
        <TestimonialsComponent />
        <ReadyForSetupComponent />
        <FooterComponent />
      </Box>
    </ChakraProvider>
  )
}

export default App
