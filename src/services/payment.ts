import { REVOLUT_CLIENT_ID } from "@/constants/config";
import axios, { AxiosResponse } from "axios";

export const paymentGatwayAPI = async (data: any): Promise<AxiosResponse<any, any>> => {
    console.log("Get Cart")
    console.log("Payment: ", data)
    return await axios({
        method: 'POST',
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-origin': "*",
            "Connection": 'Keep-Alive',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${REVOLUT_CLIENT_ID}`,

        },
        data: {
            "amount": 10,
            "currency": "USD",
            "metadata": {
                "cart_id": "194d066d-c276-4983-af9c-3dc5803de420"
            }
        },
        url: `https://sandbox-merchant.revolut.com/api/1.0/orders`,
    });
};
