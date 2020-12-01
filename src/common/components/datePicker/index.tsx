import React, {createRef, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './date_picker.scss'

import DatePickerHeader from "./container/datePickerHeader";
import DatePickerCalender from "./container/datePickerCalender";
import Header from "../../partials/Header";

interface DatePickerProps {
    onChange: (selectedDay: any) => void
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
    const {
        onChange
    } = props

    let oneDay = 60 * 60 * 24 * 1000;
    let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

    //day and months
    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //active calender boolean
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

    //today date timeline
    const date = new Date();
    const [year, setYear] = useState<any>(date.getFullYear())
    const [month, setMonth] = useState<any>(date.getMonth())
    const [selectedDay, setSelectedDay] = useState(todayTimestamp)
    const [getMonthDetails, setMonthDetails] = useState<any>([])

    //input ref
    let inputRef = createRef<any>();

    const addBackDrop = (e: any) => {
        if (showDatePicker && !ReactDOM.findDOMNode(this)?.contains(e.target)) {
            setShowDatePicker(false);
        }
    }

    const getNumberOfDays = (year: any, month: any) => {
        return 40 - new Date(year, month, 40).getDate();
    }

    const getDayDetails = (args: any) => {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month,
            timestamp,
            dayString: daysMap[day]
        }
    }

    const fetchMonthDetails = (year: any, month: any) => {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0;
        let cols = 7;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                currentDay = getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    const isCurrentDay = (day: any) => {
        return day.timestamp === todayTimestamp;
    }

    const isSelectedDay = (day: any) => {
        return day.timestamp === selectedDay;
    }

    const getDateFromDateString = (dateValue: any) => {
        let dateData = dateValue.split('-').map((d: any) => parseInt(d, 10));
        if (dateData.length < 3)
            return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }
    const setNewDate = (dateData: any) => {
        let selectedDay = new Date(dateData.year, dateData.month - 1, dateData.date).getTime();
        setSelectedDay(selectedDay)
        if (onChange) {
            onChange(selectedDay);
        }
    }
    const updateDateFromInput = () => {
        let dateValue = inputRef.current.value;
        let dateData = getDateFromDateString(dateValue);
        if (dateData !== null) {
            setNewDate(dateData);
            setYear(dateData.year)
            setMonth(dateData.month - 1)
            setMonthDetails(() => fetchMonthDetails(year, month - 1))
        }
    }
    const getDateStringFromTimestamp = (timestamp: any) => {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();
        return dateObject.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date);
    }
    const setDateToInput = (timestamp: any) => {
        let dateString = getDateStringFromTimestamp(timestamp)
        inputRef.current.value = dateString;
    }
    const onDateClick = (day: any) => {
        setSelectedDay(day.timestamp)
        setDateToInput(day.timestamp);
        setShowDatePicker(false)
        if (onChange) {
            onChange(day.timestamp);
        }
    }

    const setNewYear = (offset: number) => {
        setYear(year + offset)
        setMonth(month)
        setMonthDetails(() => fetchMonthDetails(year, month))
    }

    const setNewMonth = (offset: number) => {
        let newYear = year
        let newMonth = month + offset;
        if (newMonth === -1) {
            newMonth = 11;
            newYear--;
        } else if (newMonth === 12) {
            newMonth = 0;
            newYear++;
        }
        setYear(newYear)
        setMonth(newMonth)
        setMonthDetails(() => fetchMonthDetails(newYear, newMonth))
    }

    const handleOpenDatePicker = () => {
        setShowDatePicker(true)
        setMonthDetails(() => fetchMonthDetails(year, month))
    }
    const getMonthStr = (month: number) => {
        return monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
    }

    useEffect(() => {
        addBackDrop('click')
    }, [])
    useEffect(() => {
        setDateToInput(selectedDay)
    }, [selectedDay])


    return (
        <>
            <Header title={"Custom Date "} meta_desc={"this is custom calender"}/>
            <div className={'date-picker'}>
                <div className='dp-input' onClick={() => handleOpenDatePicker()}>
                    <input type='date' onChange={updateDateFromInput} ref={inputRef}/>
                </div>
                {showDatePicker ? (
                    <div className='dp-container'>
                        <DatePickerHeader
                            month={month}
                            year={year}
                            getMonthStr={getMonthStr}
                            setMonth={setNewMonth}
                            setYear={setNewYear}/>
                        <div className="dp-body">
                            <DatePickerCalender
                                onDateClick={onDateClick}
                                isSelectedDay={isSelectedDay}
                                isCurrentDay={isCurrentDay}
                                monthDetails={getMonthDetails}/>
                        </div>
                    </div>
                ) : ''}
            </div>
        </>
    );
};

export default DatePicker;

// use of ways
// const [selectedDate, setSelectedDate] = useState('')
// <DatePicker onChange={setSelectedDate}/>
// <p>your selected day is {selectedDate} </p>
