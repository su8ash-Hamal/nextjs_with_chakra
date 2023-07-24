import Head from 'next/head'
import { chakra, Heading, Button, Box, Text, Grid, SimpleGrid, Flex, useColorMode, useColorModeValue, HStack, LightMode, DarkMode } from "@chakra-ui/react"


import { Link } from '@chakra-ui/next-js'

const PasswordField = chakra('input', {
  label: "New Label",
  baseStyle: {
    shadow: 'lg',
    rounded: 'lg',
    bg: 'white',
    type: "password"
  },
})


export default function Home() {


  const { colorMode, toggleColorMode } = useColorMode()

  // useColorModeValue(lightModeValue, darkModeValue)
  const bg = useColorModeValue('red.500', 'green.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <HStack>
      <Box
        sx={{
          '@media print': {
            display: 'none',
          },
        }}
      >
        This text wont be shown when printing this page.
      </Box>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>

      <Box layerStyle='selected'>This is a box</Box>
      <Box borderWidth={2} borderColor='purple.500' p={5} className='my-box'>
        <Heading size='lg'>
          Hover the box...
          <Box
            as='span'
            color='red.500'
            sx={{
              '.my-box:hover &': {
                color: 'green.500',
              },
            }}
          >
            And I will turn green!
          </Box>
        </Heading>
      </Box>

      <LightMode>
        <Button size='sm' colorScheme='blue'>
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button size='sm' bg={bg}>
          Dark Mode Always
        </Button>
      </DarkMode>

      <chakra.button
        px='3'
        py='2'
        bg='green.200'
        rounded='md'
        _hover={{ bg: 'green.300' }}
      >
        Click me
      </chakra.button>

      <Box mb={4} bg={bg} color={color}>
        This boxs style will change based on the color mode.
      </Box>

      <PasswordField />

      <h2>Hello New World</h2>
      <h4>Ram saila dhadai katera</h4>
    </HStack >
  )
}
