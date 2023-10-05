import { Flex, Button, chakra, SimpleGrid, GridItem, Icon, VStack, useToast, Box, Text, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'

import { useQueryClient } from 'react-query';
import { format, setHours, setMinutes, setSeconds } from 'date-fns';


import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';


import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { initialDeliveryHours } from '@/constants/data';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OpeningHoursValidationSchema, openingHoursForm } from './validation';

interface DayObject {
    open: Date
    close: Date
}

interface DeliveryHours {
    friday: DayObject[]
    monday: DayObject[]
    sunday: DayObject[]
    tuesday: DayObject[]
    saturday: DayObject[]
    thursday: DayObject[]
    wednesday: DayObject[]
}

const FdDeliveryTimePicker = () => {





    const [isEditMode, setIsEditMode] = useState(false);

    const [deliveryHours, setDeliveryHours] = useState(initialDeliveryHours)


    const toast = useToast();


    const queryClient = useQueryClient();

    const [editableDeliveryHours, setEditableDeliveryHours] = useState<DeliveryHours | null>();



    const { handleSubmit, setValue, control, errors, append } = useForm<openingHoursForm>({
        resolver: yupResolver(OpeningHoursValidationSchema),
    });



    const minTime = setSeconds(setMinutes(setHours(new Date(), 0), 0), 0);
    const minTimeVariant = setSeconds(setMinutes(setHours(new Date(), 6), 6), 6);

    const maxTime = setSeconds(setMinutes(setHours(new Date(), 23), 59), 59);


    const handleEditModeChange = () => {
        setIsEditMode(true);

        let currentDeliveryHours: any = { ...deliveryHours! };

        if (currentDeliveryHours && deliveryHours) {


            Object.entries(currentDeliveryHours).map(([key, value]: any) => {
                setValue(key, [value.map((openStatus: any) => {
                    return {
                        ...openStatus,
                        "startTime": new Date(openStatus.open),
                        "closeTime": new Date(openStatus.close)
                    };

                })])
            })


        }


        // [
        //     key,
        // value.map((openStatus: any) => {
        //     return {
        //         ...openStatus,
        //         "new": new Date(openStatus.open),
        //         "open": new Date(openStatus.open),
        //         "close": new Date(openStatus.close)
        //     };

        // })
        // ]


        console.log("splits", currentDeliveryHours)


        setEditableDeliveryHours(currentDeliveryHours)
    };







    const handleFormSubmit = handleSubmit((data) => {
        // mutate(data);
        toast({
            description: "Hello world"
        })
    });
    return (

        <Box
            px="2"
            bg=""
            borderRadius="8px"
            mt={2}
            w={{ base: '100%', md: '100%', lg: '100%', xl: '100%' }}
            mb={2}
        >
            <Flex justify={'space-between'} align={'center'}>
                <Text p="5" fontWeight={'500'} fontSize={'20px'} lineHeight={'28px'}>
                    Delivery Hour
                </Text>
                <Flex>
                    {!isEditMode ? (
                        <Button
                            p="2"
                            mr="5"
                            h="10"
                            w="8"
                            borderRadius={'50%'}
                            bg={'#292932'}
                            color="white"
                            type="button"
                            onClick={() => {
                                handleEditModeChange();
                            }}
                        >
                            Edit
                        </Button>
                    ) : (
                        <Button
                            p="2"
                            mr="5"
                            h="10"
                            w="8"
                            borderRadius={'50%'}
                            bg={'#292932'}
                            color="white"
                            type="submit"
                        >
                            Save
                        </Button>
                    )}
                    <Button
                        p="2"
                        mr="5"
                        h="10"
                        w="8"
                        borderRadius={'50%'}
                        bg={'red'}
                        color="white"
                        onClick={() => {
                            setIsEditMode(false);
                        }}
                    >
                        Clear
                    </Button>
                </Flex>
            </Flex>

            <chakra.form onSubmit={handleFormSubmit}>
                <Flex>
                    <SimpleGrid
                        columns={12}
                        pb="10"
                        pt="5"
                        fontFamily={'Inter'}
                        fontWeight={'400'}
                        fontSize={'16px'}
                        lineHeight={'24px'}
                    >


                        <FormControl isInvalid={!!errors.sunday} mt="6">
                            <Text fontWeight="600" mb={1}>Start Date</Text>
                            {control?._fields.sunday?.map((field, index) => (
                                <Stack key={field.id} spacing={4}>
                                    <Controller
                                        name={`sunday`}
                                        control={control}
                                        render={({ field }) => (
                                            <FormControl>
                                                <FormLabel>Start Time</FormLabel>
                                                <Input type="time" {...field} />
                                            </FormControl>
                                        )}
                                    />

                                    <Controller
                                        name={`sunday[${index}].closeTime`}
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <FormControl>
                                                <FormLabel>Close Time</FormLabel>
                                                <Input type="time" {...field} />
                                            </FormControl>
                                        )}
                                    />
                                </Stack>
                            ))}
                            <FormErrorMessage color={"red"}>{errors.sunday && errors.sunday.message}</FormErrorMessage>
                        </FormControl>

                    </SimpleGrid>
                </Flex>
            </chakra.form>
        </Box >
    )
}

export default FdDeliveryTimePicker