import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Chart3() {
    const options = {
        labels: ['Enfrentamento à Violência', 'Cidadania e Autonomia Econômica', 'Saúde e Qualidade de Vida'], // Rótulos para cada parte do gráfico de rosquinha
        legend: {
            position: 'bottom', 
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
        colors: ['#781c77', '#ad4fab', '#592156'], 
        dataLabels: {
            style: {
                fontSize: '13px', 
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
                    size: '55%', 
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
                            fontSize: '13px',
                            fontWeight: 'bold', 
                            color: '#333'
                        }
                    }
                }
            }
        }
    };

    const series = [35, 30, 35]; 

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
