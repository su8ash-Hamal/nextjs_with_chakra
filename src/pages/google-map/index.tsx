import React, { useState } from 'react'
import {
    GoogleMap,
    InfoWindowF,
    LoadScript,
    MarkerF,
    useJsApiLoader
} from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@/constants/config';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';


const containerStyle = {
    width: "100%",
    height: "100%"
};


interface Place {
    name: string,
    latitude: number | undefined,
    longitude: number | undefined,
}


interface Position {
    lat: number,
    lng: number,
}

const GoogleMapTest = () => {

    const [place, setPlace] = useState<Place>();

    const [position, setPosition] = useState<Position>({
        lat: 40.7121,
        lng: -74.005
    });


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const [selected, setSelected] = useState<boolean>(false)


    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])


    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the :any instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(position);
        map.fitBounds(bounds);

        setMap(map)
    }, [])


    // Not Available for my api key
    const getCoordinates = async (city: string) => {

        const getCoordinates = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_MAPS_API_KEY}`

        const response = await fetch(getCoordinates);

        const geoCode = await response.json();

        // const { lat, lng } = geoCode.results[0].geometry.location

        console.log(response);
        console.log(response.url)
        console.log(geoCode);
        // console.log(lat);
        // console.log(lng);

    }


    const onhandleSubmit = async () => {
        await getCoordinates("Tokyo");
    }


    return isLoaded ? (
        <Flex direction={"column"} gap={"6"} justifyContent={"center"} alignItems={"center"}>
            <Button onClick={onhandleSubmit}>
                Get Coordinates
            </Button>

            <Heading>Google Maps</Heading>
            <Box w={"700px"} h={"500px"} display={"flex"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={12}
                    onLoad={onLoad}
                    onUnmount={onUnmount}

                    options={{
                        controlSize: 0,
                        styles: [
                        ]
                    }}
                    // onClick={(e: google.maps.MapMouseEvent) => {
                    //     console.log(e);
                    // }}

                    onClick={(e: google.maps.MapMouseEvent) => {
                        console.log(e);
                        console.log(e.latLng);
                        setSelected(false);
                        setPlace({
                            name: "Property Address",
                            longitude: e?.latLng?.lng(),
                            latitude: e?.latLng?.lat(),
                        })
                    }}
                >
                    {
                        place &&
                        <MarkerF
                            key={place.latitude + " " + place.longitude}

                            onClick={() => {
                                console.log(place.name)
                                setSelected(true);

                            }}


                            position={{
                                lat: place.latitude ?? position.lat,
                                lng: place.longitude ?? position.lng
                            }}
                        />
                    }

                    {
                        place && selected &&
                        <InfoWindowF

                            zIndex={1}
                            options={{
                                pixelOffset: new google.maps.Size(0, -5)
                            }}

                            onCloseClick={() => {
                                setSelected(false);
                            }}
                            position={{
                                lat: place.latitude ?? position.lat,
                                lng: place.longitude ?? position.lng
                            }}
                        >
                            <>
                                <h1><strong>{place.name}</strong></h1>
                                <h2><strong>Lat: </strong>{place.latitude}</h2>
                                <h2><strong>Lng: </strong> {place.longitude}</h2>
                            </>
                        </InfoWindowF>
                    }

                </GoogleMap>
            </Box>
        </Flex >
    ) : <><h1>Wait Map is Loading...</h1></>
}

export default GoogleMapTest