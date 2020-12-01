import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
    const [chartData] = useState([
        100, 200, 300, 400
    ])
    const [label] = useState([
        'Projects',
        'Study',
        "Tasks",
        "Account"
    ])
    return (
        <Pie
            data={{
                labels: label,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: ['red', 'blue', 'green', 'yellow']
                    }
                ]
            }}
            options={{
                maintainAspectRatio: true
            }}

        />
    );
};

export default PieChart;
