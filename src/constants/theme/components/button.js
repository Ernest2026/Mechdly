import { defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        borderRadius: '37px',
    },
    // Styles for the size variations
    sizes: {
        lg: {
            fontSize: 'xl',
            padding: '24px 60px'
        },
        md: {
            padding: '18px 40px',
        },
    },
    // Styles for the visual style variations
    variants: {
        solid: (props) => ({
            bg: `${props.colorScheme}.500`,
            color: 'black',
            _hover: { bg: `${props.colorScheme}.500` },
            _active: { bg: `${props.colorScheme}.600` },
            _disabled: { bg: `${props.colorScheme}.100` },
        }),
        outline: { 
            bg: 'black.200', 
            color: 'neutral.100', 
            borderWidth: '2px', 
            borderColor: '#F6853799',
            _hover: { bg: 'black.200' },
            _active: { bg: 'neutral.900' },
         },
    },
    // The default `size` or `variant` values
    defaultProps: {
        colorScheme: 'orange',
        size: 'lg'
    },
})