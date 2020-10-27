import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

export default function DashboardCandleStick ({data, options}){
    // console.log("dashboard CandleString : ",data);
    // var dataCandlestick = data;
    // console.log("dataCandlestick CandleString : ",dataCandlestick);

    return(
        <div className="col-xl-12">
            <div className="card">
                <div className="card-header card-headerStyle">
                    <h5>Attendance</h5>
                </div>
                <div className="card-block">
                    <div className="legendlabel text-center">
                            {/* <div style={{"height": "20px", "width": "20px;", "background": "rgb(4, 169, 245)"}}></div> */}
                            <b style={{"background": "#dcdc1c"}}>Sync Time  </b>
                            {/* <span style={{"background":"#04a9f5"}} className="card-blockSpanStyle"></span> */}
                            {/* <div style={{"height": "20px", "width": "20px;", "background": "#04a9f5"}}></div> */}
                            <b style={{"background": "#04a9f5"}}>  Async Time</b>
                        </div>
                    
                        {/* <Chart chartType="CandlestickChart"
                            width="100%"
                            height="400px"
                            data={dataCandlestick}
                            options={optionsCandlestick}
                        /> */}
                        <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="CandlestickChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            // ['day', 'a', 'b', 'c', 'd'],
                            // ['Mon', 20, 28, 38, 45],
                            // ['Tue', 31, 38, 55, 66],
                            // ['Wed', 50, 55, 77, 80],
                            // ['Thu', 77, 77, 66, 50],
                            // ['Fri', 68, 66, 22, 15],

                            ['day', 'a', 'b', 'c', 'd','e','f','g','h'],
                            ['09/01', 7, 9, 11, 18,7, 9, 11, 18],
                            ['09/02', 7, 9, 12, 18,7, 9, 11, 18],
                            ['09/03', 7, 9, 10, 18,7, 9, 11, 18],
                            ['09/04', 7, 8, 11, 18,7, 9, 11, 18],
                            ['09/05', 7, 8, 10, 18,7, 9, 11, 18],
                            ['09/06', 7, 10, 12, 18,7, 9, 11, 18],
                            ['09/07', 7, 12, 14, 18,7, 9, 11, 18],
                            ['09/08', 7, 10, 14, 18,7, 9, 11, 18],
                            ['09/09', 7, 7, 15, 18,7, 9, 11, 18],
                            ['09/10', 7, 8, 11, 18,7, 9, 11, 18],
                            ['09/11', 7, 9, 11, 18,7, 9, 11, 18],
                            ['09/12', 7, 15, 18, 18,7, 9, 11, 18],
                            ['09/13', 7, 9, 12, 18,7, 9, 11, 18],
                            ['09/14', 7, 11, 15, 18,7, 9, 11, 18],
                            ['09/15', 7, 7, 15, 18,7, 9, 11, 18],
                            ['09/16', 7, 8, 15, 18,7, 9, 11, 18],
                            ['09/17', 7, 12, 15, 18,7, 9, 11, 18],
                            ['09/18', 7, 13, 15, 18,7, 9, 11, 18],
                            ['09/19', 7, 15, 15, 18,7, 9, 11, 18],
                            ['09/20', 7, 11, 15, 18,7, 9, 11, 18],
                            ['09/21', 7, 16, 18, 18,7, 9, 11, 18],
                            ['09/22', 7, 16, 17, 18,7, 9, 11, 18],
                            ['09/23', 7, 13, 15, 18,7, 9, 11, 18],
                            ['09/24', 7, 13, 17, 18,7, 9, 11, 18],
                            ['09/25', 7, 13, 16, 18,7, 9, 11, 18],
                            ['09/26', 7, 11, 17, 18,7, 9, 11, 18],
                            ['09/27', 7, 14, 15, 18,7, 9, 11, 18],
                            ['09/28', 7, 10, 11, 18,7, 9, 11, 18],
                            ['09/29', 7, 16, 18, 18,7, 9, 11, 18],
                            ['09/30', 7, 8, 11, 18,7, 9, 11, 18],
                        ]
                        }
                        options={{
                            legend: 'none',
                            colors: ['#04a9f5','#dcdc1c'],
                            bar: { groupWidth: '100%' }, // Remove space between bars.
                            // candlestick: {
                            //     fallingColor: { strokeWidth: 0, fill: '#04a9f5' }, // yellow
                            //     risingColor: { strokeWidth: 0, fill: '#dcdc1c' }, // blue
                            // },
                    }}
                    rootProps={{ 'data-testid': '8' }}
                    />
                </div>
            </div>
        </div>
    )
}
