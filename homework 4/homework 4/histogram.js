var data = [5.8, 5.8, 5.8, 5.8, 5.8, 5.8, 6.8, 6.8, 6.8, 6.8, 6.8, 6.8, 6.6,
    6.6, 6.6, 6.6, 6.6, 6.6, 7. , 7. , 7. , 7. , 7. , 7. , 7. , 6.9,
    6.9, 6.9, 6.9, 6.9, 6.9, 6.9, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 5.4,
    5.4, 5.4, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.5,
    7.5, 5.6, 5.6, 5.6, 7.7, 6.7, 6.7, 6.7, 6.7, 6.4, 6.4, 6.4, 5.5,
    5.5, 5.5, 5.3, 5.3, 6.3, 6.3, 6.3, 6.3, 6.3, 6.3, 7.9, 7.9, 3.6,
    3.6, 3.6, 3.2, 4.2, 4.2, 3.5, 3.5, 3.5, 3.5, 3.5, 7.4, 7.4, 7.4,
    7.4, 7.4, 7.4, 7.4, 7.4, 8.5, 4.6, 4.6, 4.6, 4.6, 5. , 5. , 5. ,
    3.1, 3.9, 3.9, 7.3, 7.3, 7.3, 7.3, 5.2, 5.2, 5.2, 5.2, 2.6, 2.6,
    2.6, 2.6, 7.1, 7.1, 8.4, 8.4, 8.4, 8.4, 2.9, 7.8, 6. , 6. , 6. ,
    6. , 6. , 4.3, 4.3, 4.3, 4.3, 9.1, 8.3, 5.9, 5.9, 5.9, 5.9, 5.9,
    5.9, 5.9, 5.9, 5.9, 6.1, 6.1, 6.1, 6.1, 4.8, 6.2, 6.2, 6.2, 5.1,
    2.7, 8.1, 4. ]
Highcharts.chart('container_hist', {
    title: {
        text: 'Jennir Lawrence Movie ratings Histogram'
    },
    xAxis: [{
        title: { text: 'Index',style:{fontSize:'18px'} },
        labels:{
            style:{
                fontSize: '15px'
            }
        },
        alignTicks: false
    }, {
        title: { text: 'Ratings',style:{fontSize:'18px'} },
        alignTicks: false,
        opposite: true,
        labels:{
            style:{
                fontSize: '15px'
            }
        }
    }],

    yAxis: [{
        title: { 
            text: 'Count',
            style:{
                fontSize:'18px'
            }
         },
        labels:{
            style:{
                fontSize: '15px'
            }
        }
    }, {
        title: { text: 'Frequency', style:{fontSize:'18px'}},
        opposite: true,labels:{
            style:{
                fontSize: '15px'
            }
        }
    }],

    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1
    }, {
        name: 'Data',
        type: 'scatter',
        data: data,
        id: 's1',
        marker: {
            radius: 1.5
        }
    }]
});