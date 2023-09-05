import CommonPageLayout from '@/Layouts/commonLayout'
import { GOOGLE_CLIENT_ID, MOVIE_API_URL } from '@/constants/config'
import theme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './datePicker/datepicker.css';


export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();



  axios.defaults.baseURL = MOVIE_API_URL;

  // axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <CommonPageLayout>
              <Component {...pageProps} />
            </CommonPageLayout>
          </ChakraProvider>
        </CacheProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )

}
