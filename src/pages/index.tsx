import { API_URL } from '@/constants/config'
import { Box, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import { useQuery } from 'react-query'


export default function Home() {


  const { colorMode, toggleColorMode } = useColorMode()


  const { isLoading, error, data } = useQuery('users', () =>
    fetch(`${API_URL}/users?limit=10`).then(res =>
      res.json()
    )
  )


  if (isLoading) {
    return <h1>Loading...</h1>
  }



  return (
    <Box>
      {
        error ? <h2>Facing Error</h2> :

          <h1>Hello</h1>
      }
    </Box>
  )
}
