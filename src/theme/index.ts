
import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
    fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
    }
}




const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    colors,
    config,
    styles: {
        global: (props: any) => ({
            'html, body': {
                fontSize: 'sm',
                color: props.colorMode === 'dark' ? 'purple' : 'gray.600',
                lineHeight: 'tall',
            },
            a: {
                color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
            },
        }),
    },
    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },
        selected: {
            bg: 'purple',
            color: 'white',
            borderColor: 'orange.500',
        },
    },
})

export default theme;