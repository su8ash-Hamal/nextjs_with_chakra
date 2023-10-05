import ChipInput from '@/components/ChipInput'
import { API_URL } from '@/constants/config'
import { HomeLinks } from '@/constants/data'
import { paymentGatwayAPI } from '@/services/payment'
import { Box, VStack, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import router from 'next/router'
import { useMutation, useQuery } from 'react-query'


export default function Home() {


  const { colorMode, toggleColorMode } = useColorMode()


  // const { isLoading, error, data } = useQuery('users', () =>
  //   fetch(`${API_URL}/users?limit=10`).then(res =>
  //     res.json()
  //   )
  // )


  const getPaymentReady = useMutation(['cart'], async (data: any) => paymentGatwayAPI(data), {
    onSuccess: (data: any) => {


      console.log('Payment: ', data.data);

      if (data.data) {
        console.log('routed');
        router.push(data.data.checkout_url);
      }
      // dispatch(_updateCartFromServer(data.data as ICartServerStateType));

      return data.data;
    },
    onError: (data: any) => {
      console.log('Cart From Server Error: ');
      console.log(data);
    },
  });

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }




  return (

    <VStack>
      {
        HomeLinks.map((item, index) => {
          return (
            <Link key={index} href={item.link}>{item.name}</Link>)
        })
      }
    </VStack>
  )
}
