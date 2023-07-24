import theme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {

  return (
    <CacheProvider>

      <style jsx global>
        {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
      </style>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )

}
