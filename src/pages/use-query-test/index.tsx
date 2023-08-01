import { API_URL, MOCK_API_URL, MOVIE_API_TOKEN, MOVIE_API_URL } from '@/constants/config'
import { Box, Heading, useColorMode, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

const ReactUseQueryTest = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    axios.defaults.headers.common['Authorization'] = `Bearer ${MOVIE_API_TOKEN}`;



    // console.log(MOVIE_API_TOKEN);



    // const { isLoading, error, data } = useQuery('users', () =>
    //     fetch(`${MOCK_API_URL}/users/1/tasks?limit=10&page=3`).then(res =>
    //         res.json()
    //     )
    // )


    // const { isLoading, error, data } = useQuery('movies', () =>
    //     axios({
    //         method: 'post',
    //         url: '/discover/tv',
    //         data: {
    //             firstName: 'Fred',
    //             lastName: 'Flintstone'
    //         }
    //     })
    // )




    const { isLoading, data, isError, error } = useQuery(
        "movies",
        async () => {
            return await axios({
                method: 'get',
                url: '/discover/movie'
            });
        },
        {
            onSuccess: (res) => {
                // const result = {
                //     status: res.status + "-" + res.statusText,
                //     headers: res.headers,
                //     data: res.data,
                // };

                console.log(res);

                return res;

                // setGetResult(fortmatResponse(result));
            },
            onError: (err) => {
                console.log(err);
            },
        }
    );


    if (isLoading) {
        return <h1>Loading...</h1>
    }



    return (
        <Box>
            {
                error ? <h2>Facing Error</h2> :
                    <>
                        {
                            data && data?.data?.results?.map((item: any) => {
                                return (
                                    <Box key={item.id}>
                                        <Text>{item.id}</Text>
                                        {/* <Heading size={"md"} fontWeight={"semibold"} >{item.id} - {item.name}</Heading>
                                        <Text>{item.email}</Text> */}
                                    </Box>
                                )
                            })
                        }
                    </>
            }
        </Box>
    )
}

export default ReactUseQueryTest