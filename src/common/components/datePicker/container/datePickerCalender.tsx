import React from 'react';

interface DatePickerCalenderPropsInterface {
    monthDetails: any,
    isCurrentDay: any,
    onDateClick: any,
    isSelectedDay: any
}

const DatePickerCalender: React.FC<DatePickerCalenderPropsInterface> = (props) => {
    const {
        monthDetails,
        isCurrentDay,
        onDateClick,
        isSelectedDay
    } = props

    return (
        <div className='dp-calender'>
            <div className='dp-calendar-head'>
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => <div key={i}
                                                                                      className='dp-calendar-head-name'>{d}</div>)}
            </div>
            <div className='dp-calendar-body'>
                {
                    monthDetails.map((day: any, index: number) => (
                        <div className={'dp-calender-day-container ' + (day.month !== 0 ? 'disabled' : '') +
                        (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? ' highlight-green' : '')}
                             key={index}>
                            <div className='dp-calender-container-day'>
                                <span onClick={() => onDateClick(day)}>
                                    {day.date}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DatePickerCalender;
