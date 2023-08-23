import React, { useState } from 'react';
import { Box, Input, Flex, Button, Wrap, WrapItem, CloseButton } from '@chakra-ui/react';

function ChipInput() {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([]);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event: any) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            // setChips((prevChips) => [...prevChips, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleChipRemove = (chip: any) => {
        setChips((prevChips) => prevChips.filter((c) => c !== chip));
    };

    return (
        <Box>
            <Wrap mt={2}>
                {chips.map((chip) => (
                    <WrapItem key={chip}>
                        <Button variant="outline" size="sm">
                            {chip}
                            <CloseButton size="sm" ml={2} onClick={() => handleChipRemove(chip)} />
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>
            <Input
                placeholder="Type and press Enter..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />

        </Box>
    );
}

export default ChipInput;
