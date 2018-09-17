(function($) {
    Highcharts.chart('manager-chart', {
        chart: {
            type: 'column'
        },
        credits:{
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0,
            borderWidth: 0,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Sold',
            data: [500, 450, 350, 230, 120, 110],
            color: '#296299'
        }, {
            name: 'Processed',
            data: [530, 545, 467, 280, 130, 140],
            color: '#4995cf'
        }]
    });
})(jQuery);