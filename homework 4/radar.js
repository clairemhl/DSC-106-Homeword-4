Highcharts.chart('container_radar',{

    chart: {
        polar: true,
        type: 'line'
    },
    title: {
        text: 'Radar Chart for Jennifer Lawrence Movie Genres preference'
    },

    pane: {
        size: '100%'
    },

    xAxis: {
        categories: ['biography', 'drama', 'romance', 'history', 'action', 'adventure', 'sci-fi', 'short', 'music', 'thriller', 'horror', 'mystery', 'crime', 'comedy', 'family', 'fantasy', 'reality-tv', 'documentary'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'left',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'Genres count',
        data:[8, 32, 10, 3, 12, 11, 13, 47, 23, 15, 3, 7, 6, 48, 5, 3, 5, 52],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '100%'
                }
            }
        }]
    }

});