import { GOOGLE_CLIENT_ID } from '@/constants/config';
import { Button } from '@chakra-ui/react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'

const OAuthGoogle = () => {

    const [data, setdata] = useState<any>();


    const responseMessage = (response: any) => {
        console.log(response);
        setdata(response);
    };
    const errorMessage = () => {
        console.log("error");
    };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse),
                setdata(tokenResponse);
        }

    });



    return (
        <div>
            <h2>OAuthGoogle</h2>

            {data && <h2>{data.access_token}</h2>}

            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

            <Button onClick={() => login()}>
                Sign in with Google 🚀{' '}
            </Button>;



            <Button onClick={() => {

                googleLogout()
                setdata(null);
            }}>
                Sign in with Google 🚀{' '}
            </Button>;
        </div>
    )
}

export default OAuthGoogle