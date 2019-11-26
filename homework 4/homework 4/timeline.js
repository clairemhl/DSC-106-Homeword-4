Highcharts.chart('container_timeline', {
    chart: {
        zoomType: 'x',
        type: 'timeline'
    },
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 2,
        title: null,
        labels: {
            enabled: false
        }
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Timeline of important Jennifer Lawrence movies release date'
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}'
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(2010,6,11),
            name: 'Winter Bones',
            label: 'Winter Bones'
        }, {
            x: Date.UTC(2011,5,25),
            name: 'X-men: First class',
            label: 'X-men: First class'
        }, {
            x: Date.UTC(2012,3,12),
            name: 'The hunger games',
            label: 'The hunger games'
        }, {
            x: Date.UTC(2012,11,16),
            name: 'Silver linings playbook',
            label: 'Silver linings playbook'
        },{
            x: Date.UTC(2013,9,21),
            name: 'House at the end of the street',
            label: 'House at the end of the street'
        },  {
            x: Date.UTC(2013,4,15),
            name: 'The devil you know',
            label: 'The devil you know'
        }, {
            x: Date.UTC(2013,11,11),
            name: 'The hunger games, catching fire',
            label: 'The hunger games, catching fire'
        }, {
            x: Date.UTC(2013,12,13),
            name: 'America hustle',
            label: 'America hustle'
        }, {
            x: Date.UTC(2013,5,10),
            name: 'X-men: days of future past',
            label: 'X-men: days of future past'
        }, {
            x: Date.UTC(2014,10,13),
            name: 'Serena',
            label: 'Serena'
        }, {
            x: Date.UTC(2014,11,10),
            name: 'The hunger game: mockingJay – Part I',
            label: 'The hunger game: mockingJay – Part I'
        }, {
            x: Date.UTC(2014,11,4),
            name: 'The hunger game: mockingJay – Part II',
            label: 'The hunger game: mockingJay – Part II'
        }, {
            x: Date.UTC(2015,12,13),
            name: 'Joy',
            label: 'Joy'
        }, {
            x: Date.UTC(2016,5,9),
            name: 'X-Men, Apocalypse',
            label: 'X-Men, Apocalypse'
        }, {
            x: Date.UTC(2016,12,22),
            name: 'Passengers',
            label: 'Passengers'
        }, {
            x: Date.UTC(2017,9,14),
            name: 'Mother!',
            label: 'Mother!'
        },{
            x: Date.UTC(2018,2,15),
            name: 'Red Sparrow',
            label: 'Red Sparrow'
        }]
    }]
});