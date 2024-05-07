import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Chart() {
    const options = {
        labels: ['Campanha', 'Projeto'], 
        legend: {
            position: 'right', 
            fontSize: '14px', 
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            formatter: function (seriesName, opts) {
                return seriesName;
            },
            offsetY: 8
        },
        colors: ['#781c77', '#ad4fab',], 
        dataLabels: {
            style: {
                fontSize: '16px', 
                fontWeight: 'bold' 
            },
            dropShadow: {
                enabled: true,
                blur: 3,
                opacity: 0.5
            }
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '58%', 
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '16px', 
                            fontWeight: 'bold', 
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: '14px', 
                            fontWeight: 'normal', 
                            offsetY: 16, 
                            formatter: function (val) {
                                return val + "%";
                            }
                        },
                        total: {
                            show: true,
                            showAlways: false,
                            label: 'Total',
                            fontSize: '16px', 
                            fontWeight: 'bold', 
                            color: '#333'
                        }
                    }
                }
            }
        }
    };

    const series = [35, 65]; 

    return (
        <ApexCharts
            options={options}
            series={series}
            type="donut" 
            width={840}
            height={680}
        />
    );
}
