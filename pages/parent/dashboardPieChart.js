import { useState, useEffect } from 'react';
import Chart from 'chart.js';

export default function DashboardPieChart (props){
    useEffect(() => {
        loadPieChart()
        return () => {
            console.log("After loading load---------------------")
        }
    })
    const loadPieChart = () =>{
        var bar = document.getElementById("chart-pie-1").getContext('2d');
        console.log("Coming inside",bar)
        var theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
        theme_g1.addColorStop(0, '#8bc34a');
        theme_g1.addColorStop(1, '#4caf50');
        var theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
        theme_g2.addColorStop(0, '#fb1808');
        theme_g2.addColorStop(1, '#F44336');
        var data4 = {
            labels: [
                "Days On Time",
                "Days Absent",
                "Days Tardy"
            ],
            datasets: [{
                data: [3, 1, 1],
                backgroundColor: [
                    theme_g1,
                    theme_g2,
                    "#dcdc1c"
                ],
                hoverBackgroundColor: [
                    theme_g1,
                    theme_g2,
                    "#dcdc1c"
                ]
            }]
        };
        var myPieChart = new Chart(bar, {
            type: 'pie',
            data: data4,
            responsive: true,
            options: {
                maintainAspectRatio: false,
                responsive: true,
            }
        });
    }
    return(
        <div className="card">
            <div className="card-header card-headerStyle">
                <h5>Attendance Week of Sep 7 - Sep 12</h5>
                {/* <div className="card-header card-headerStyle-right displayblock">
                    <div className="btn-group card-option">
                        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather icon-more-horizontal"></i>
                        </button>
                        <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                            <li className="dropdown-item"><a href="#!"><span>Weekly</span></a></li>
                            <li className="dropdown-item disablecursoronly"><a href="#!"><span>Monthly <i className="feather icon-lock rytdropdownicon"></i></span></a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div className="card-block">
                <canvas id="chart-pie-1" className="chartStyle"></canvas>
            </div>
        </div>
    )
}