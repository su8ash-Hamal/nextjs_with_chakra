
// import {
//     Box,
//     Button,
//     Divider,
//     Flex,
//     FormControl,
//     FormErrorMessage,
//     HStack,
//     Input,
//     Menu,
//     MenuButton,
//     MenuItem,
//     MenuList,
//     Radio,
//     RadioGroup,
//     Stack,
//     Text,
//     chakra,
//     useMediaQuery,
//     useToast,
// } from '@chakra-ui/react';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Controller, UseFormReturn, useForm } from 'react-hook-form';


// import DatePicker from 'react-datepicker';

// import * as yup from 'yup';
// import { addMinutes, isToday, setHours, setMinutes, setSeconds } from 'date-fns';
// import { searchAndSelectValidation } from './searchAndSelectValidation';
// import { useQueryClient } from 'react-query';
// import { createRef, useState } from 'react';


// type FormData = yup.InferType<typeof searchAndSelectValidation>;


// const CreateOffer = () => {
//     const toast = useToast();



//     const {
//         register,
//         handleSubmit,
//         control,
//         formState: { errors, },
//         watch,
//         getFieldState,
//         getValues,
//         setValue,
//         reset,
//     } = useForm<FormData>({
//         resolver: yupResolver(searchAndSelectValidation),
//         mode: 'onBlur',
//     });


//     const [isOpen, setisOpen] = useState(false);


//     const queryClient = useQueryClient();


//     // console.log(errors.description)
//     // Handles form submission after handling all the formvalidations of yup (validation deifined in  src\lib\ValidationSchema\signUpFormValidationSchema.ts)
//     const handleFormSubmit = handleSubmit((data) => {
//         console.log("Hello", data)
//     });

//     const [isSmallerThan530] = useMediaQuery('(min-width: 530px)', {
//         ssr: true,
//         fallback: false, // return false on the server, and re-evaluate on the client side
//     });


//     const [searchQuery, setSearchQuery] = useState("");

//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu open/close
//     const [inputValue, setInputValue] = useState(''); // State to store input value
//     const inputRef = createRef(); // Ref for the input field

//     // Function to handle input focus
//     const handleInputFocus = () => {
//         setIsMenuOpen(true);
//     };

//     // Function to handle input blur
//     const handleInputBlur = () => {
//         // Delay closing the menu to allow time for clicking menu items
//         setTimeout(() => {
//             setIsMenuOpen(false);
//         }, 200);
//     };

//     // Function to handle input change
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };


//     return (

//         <>
//             <chakra.form onSubmit={handleFormSubmit} autoComplete="off" width={"100vw"} background={"grey"} m={"auto"} p={"2px"}>
//                 {' '}
//                 <Flex direction={'column'} gap={5}>
//                     <Divider border={'1px solid #252D3C'} />


//                     <FormControl isInvalid={!!errors.selectedOptions} mt="6">
//                         <Text fontWeight="600" mb={1}>Start Date</Text>
//                         <Controller
//                             name="selectedOptions"
//                             control={control}

//                             render={({ field }) => (
//                                 <div>
//                                     <Input
//                                         ref={inputRef}
//                                         value={inputValue}
//                                         onChange={handleInputChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="Type and focus here..."
//                                     />
//                                     <Menu isOpen={isMenuOpen}>
//                                         <MenuButton as={Button} onClick={() => inputRef.current.focus()} width={"100%"}>
//                                             Open Menu
//                                         </MenuButton>
//                                         <MenuList w={"100%"}>
//                                             <MenuItem onClick={() => setInputValue('Item 1')} w={"100%"}>Item 1</MenuItem>
//                                             <MenuItem onClick={() => setInputValue('Item 2')}>Item 2</MenuItem>
//                                             <MenuItem onClick={() => setInputValue('Item 3')}>Item 3</MenuItem>
//                                         </MenuList>
//                                     </Menu>
//                                 </div>
//                             )}
//                         />
//                         <FormErrorMessage color={"red"}>{errors.selectedOptions && errors.selectedOptions.message}</FormErrorMessage>
//                     </FormControl>




//                 </Flex>
//                 <Flex justifyContent="flex-end" alignItems="center" mt={5}>
//                     <HStack>
//                         <Button variant="brand" bg="#292932" onClick={() => { }}>
//                             Cancel
//                         </Button>
//                         <Button variant="brand" type="submit">
//                             Create Offer
//                         </Button>
//                     </HStack>
//                 </Flex>
//             </chakra.form>
//         </>
//     );
// };

// export default CreateOffer;




// import React, { useState } from 'react';
// import {
//     Input,
//     Button,
//     Box,
//     List,
//     ListItem,
//     ListIcon,
// } from '@chakra-ui/react';

// function MyInputWithSelect() {
//     const [isSelectOpen, setIsSelectOpen] = useState(false); // State to control select open/close
//     const [selectedOption, setSelectedOption] = useState(''); // State to store selected option
//     const inputRef = React.createRef(); // Ref for the input field

//     const options = ['Option 1', 'Option 2', 'Option 3'];

//     // Function to handle input focus
//     const handleInputFocus = () => {
//         setIsSelectOpen(true);
//     };

//     // Function to handle input blur
//     const handleInputBlur = () => {
//         // Delay closing the select to allow time for clicking options
//         setTimeout(() => {
//             setIsSelectOpen(false);
//         }, 200);
//     };

//     // Function to handle option click
//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsSelectOpen(false);
//     };

//     return (
//         <div>
//             <Input
//                 ref={inputRef}
//                 value={selectedOption}
//                 onFocus={handleInputFocus}
//                 onBlur={handleInputBlur}
//                 placeholder="Select an option..."
//             />
//             {/* <Button
//                 variant="unstyled"
//                 onClick={() => inputRef.current.focus()}
//             >
//             </Button> */}
//             {isSelectOpen && (
//                 <Box
//                     borderWidth="1px"
//                     borderColor="gray.300"
//                     borderRadius="md"
//                     position="absolute"
//                     top="100%"
//                     left="0"
//                     zIndex="1"
//                     width="100%"
//                     maxHeight="150px"
//                     overflowY="auto"
//                 >
//                     <List>
//                         {options.map((option, index) => (
//                             <ListItem
//                                 key={index}
//                                 padding="2"
//                                 cursor="pointer"
//                                 _hover={{ bg: 'gray.100' }}
//                                 onClick={() => handleOptionClick(option)}
//                             >
//                                 <ListIcon color={selectedOption === option ? 'green.500' : 'transparent'} />
//                                 {option}
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             )}
//         </div>
//     );
// }

// export default MyInputWithSelect;



import React, { useState } from 'react';
import {
    Input,
    Button,
    Box,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';

function MyInputWithSearchAndSelect() {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = React.createRef();

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInputFocus = () => {
        setIsSelectOpen(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsSelectOpen(false);
        }, 200);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsSelectOpen(false);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <Input
                ref={inputRef}
                value={searchQuery}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                placeholder="Select an option..."
            />
            <Button
                variant="unstyled"
                onClick={() => inputRef.current.focus()}
            >
                {/* Custom select button */}
            </Button>
            {isSelectOpen && (
                <Box
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    position="absolute"
                    top="100%"
                    left="0"
                    zIndex="1"
                    width="100%"
                    maxHeight="150px"
                    overflowY="auto"
                >

                    <List>
                        {filteredOptions.map((option, index) => (
                            <ListItem
                                key={index}
                                padding="2"
                                cursor="pointer"
                                _hover={{ bg: 'gray.100' }}
                                onClick={() => handleOptionClick(option)}
                            >
                                <ListIcon
                                    color={selectedOption === option ? 'green.500' : 'transparent'}
                                />
                                {option}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </div>
    );
}

export default MyInputWithSearchAndSelect;
