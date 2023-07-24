import { Box, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'


export default function Home() {


  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Box>
      <h1>Hello</h1>
    </Box>
  )
}
