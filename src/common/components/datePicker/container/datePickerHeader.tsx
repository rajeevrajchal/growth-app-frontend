import React, {useEffect, useState} from 'react';

interface DatePickerHeaderPropsInterface {
    setYear: (number: number) => void
    setMonth: (number: number) => void
    year: number,
    month: number,
    getMonthStr: any
}

const DatePickerHeader: React.FC<DatePickerHeaderPropsInterface> = (props) => {
    const {
        setYear,
        setMonth,
        year,
        month,
        getMonthStr
    } = props
    const [myMonth, setMyMonth] = useState<string>('')

    useEffect(() => {
        setMyMonth(getMonthStr(month))
    }, [month])

    return (
        <div className="dp-head">
            <div className='dp-button'>
                <div className='dp-inner-btn' onClick={() => setYear(-1)}>
                    <i className="material-icons">keyboard_arrow_left</i>
                </div>
            </div>
            <div className='dp-button'>
                <div className='dp-inner-btn' onClick={() => setMonth(-1)}>
                    <i className="material-icons">keyboard_arrow_left</i>
                </div>
            </div>

            <div className='dp-header-container'>
                <div className='dp-header-container-year'>{year}</div>
                <div className='dp-header-container-month' style={{color: "red", textAlign:"center"}}> {myMonth} </div>
            </div>

            <div className='dp-button'>
                <div className='dp-inner-btn' onClick={() => setMonth(1)}>
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            </div>
            <div className='dp-button'>
                <div className='dp-inner-btn' onClick={() => setYear(1)}>
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            </div>
        </div>
    );
};

export default DatePickerHeader;
