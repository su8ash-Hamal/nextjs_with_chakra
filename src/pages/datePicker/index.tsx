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
                    showTimeSelect
                    onChange={(date) => {
                        console.log("dates", date)
                        console.log("dates", date)
                        setStartDate(date);
                    }}
                    selectsStart

                    startDate={startDate}
                    minDate={new Date()}
                    // endDate={endDate}
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


                <DatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                    placeholderText="Select time"
                />
            </Box>
        </div>
    );
};

export default DateRangePicker;