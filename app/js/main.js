// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdTechMarketCap = document.getElementById("chart-container-tech-market-cap");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdTechMarketCap.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-tech-market-cap");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdTechMarketCap, {
        chart: {
            type: 'treemap',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
        }, 
        series: [{
            layoutAlgorithm: 'squarified',
            layoutStartingDirection: 'horizontal',
            dataLabels: {
                align: 'center',
                allowOverlap: true,
                crop: false,
                overflow: 'justify',
            },
            data: [{
                name: 'Microsoft:<br>$1.37T',
                color: '#74c947',
                value: 1374000000000,
                sortIndex: 1,
            },{
                name: 'Apple:<br>$1.34T',
                color: '#74c947',
                value: 1342000000000,
                sortIndex: 2
            },{
                name: 'Amazon:<br>$1.17T',
                color: '#74c947',
                value: 1173000000000,
                sortIndex: 3
            },{
                name: 'Alphabet:<br>$933.82B',
                color: '#74c947',
                value: 933820000000,
                sortIndex: 4,
            },{
                name: 'Facebook:<br>$595.46B',
                color: '#74c947',
                value: 595460000000,
                sortIndex: 5,
                dataLabels: {
                    // rotation: 90
                }
            },{
                name: 'Other 495 companies:<br>$18.6T',
                color: '#cccfcf',
                value: 18595660000000,
                sortIndex: 6
            },{
            }]
        }],
        title: {
            text: null
        },
        // for bar charts only
        plotOptions: {
            series: {
                enableMouseTracking: false,
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}