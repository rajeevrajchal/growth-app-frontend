import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    const [income] = useState([
        6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 12000, 12000,
    ])
    const [expense] = useState([
        1000, 5000, 6000, 6000, 6000, 7000, 6000, 2000, 6000, 12000, 14000
    ])
    const [label] = useState([
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul', "Aug", 'Sep', 'Oct', 'Nov', 'Dec'
    ])
    return (
        <Bar
            data={{
                labels: label,
                datasets: [
                    {
                        fill: false,
                        label: 'Expenses',
                        data: expense,
                        borderColor: 'red',
                        backgroundColor: 'red'
                    },
                    {
                        fill: false,
                        label: 'Income',
                        data: income,
                        backgroundColor: 'green'
                    },
                ]
            }}
            options={{
                maintainAspectRatio: false
            }}
        />
    );
};

export default BarChart;
