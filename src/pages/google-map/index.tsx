import React, { useState } from 'react'
import {
    GoogleMap,
    InfoWindowF,
    LoadScript,
    MarkerF,
    useJsApiLoader
} from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@/constants/config';
import { Box, Flex, Heading } from '@chakra-ui/react';


const containerStyle = {
    width: "100%",
    height: "100%"
};

const center = {
    lat: 40.7121,
    lng: -74.005
};

interface Place {
    name: string,
    latitude: number | undefined,
    longitude: number | undefined,
}


const GoogleMapTest = () => {

    const [place, setPlace] = useState<Place>();


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const [selected, setSelected] = useState<boolean>(false)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the :any instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <Flex direction={"column"} gap={"6"} justifyContent={"center"} alignItems={"center"}>
            <Heading>Google Maps</Heading>
            <Box w={"700px"} h={"500px"} display={"flex"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    // onLoad={onLoad}
                    // onUnmount={onUnmount}

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
                                lat: place.latitude ?? center.lat,
                                lng: place.longitude ?? center.lng
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
                                lat: place.latitude ?? center.lat,
                                lng: place.longitude ?? center.lng
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