import theme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>

      <ReactQueryDevtools initialIsOpen={true} />
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  )

}
