import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export default class Pie extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
        series: [5358, 2592],
        options: {
          chart: {
            width: 380,
            type: 'donut',
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 3,
              blur: 3,
              opacity: 0.2
            }
          },
          stroke: {
            width: 0,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true
                  }
                }
              }
            }
          },
          labels: ["Pfizer", "Sinopharm"],
          dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            }
          },
          states: {
            hover: {
              filter: 'none'
            }
          },
          theme: {
            palette: 'palette2'
          },
          title: {
            margin: 20,
            text: "Vacunación por fabricante",
            align: "center",
            style: {
                fontSize: '20px'
            },
          },
          legend:{
            show: true,
            fontSize: '20px',
            position: 'top',
            itemMargin: {
                horizontal: 5,
                vertical: 20
            },
          },
        },
        
      
      };
    }

  render() {

    return (
      <div className="donut" style={{width:"50%", marginLeft: '25%', background: '#E5E8E8', borderRadius: '10px'}}>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="100%"/>
      </div>
    );
  }
}

