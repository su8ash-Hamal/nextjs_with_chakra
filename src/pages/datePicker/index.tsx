// components/DateRangePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, CSSReset } from '@chakra-ui/react';


const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="date-range-picker">

            {/* <CSSReset /> */}
            <Box display="flex" justifyContent="space-between">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    minDate={new Date()}
                    endDate={endDate}
                    placeholderText="Start Date"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                />
            </Box>
        </div>
    );
};

export default DateRangePicker;