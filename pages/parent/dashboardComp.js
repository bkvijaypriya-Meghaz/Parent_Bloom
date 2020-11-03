import ParentLayout from '../../layout/ParentLayout';
import DashboardPieChart from './dashboardPieChart';
import DashboardCandleStick from './dashboardCandleStick';
import DashboardHeader from './dashboardHeader';
import useEffect from 'react'
import StudentGradeInfo from './studentGradeInfo';
import UpcomingAssignments from './dashboardUpcomingAssignment';
import UpcomingLessons from './dashboardUpcomingLessons';
import StudentActivity from './StudentActivity'
import Announcement from './dashboardAnnouncement';
export default function dashboard(props) {

    // useEffect(() => {
    //     loadPieChart()
    //     return () => {
    //         console.log("After loading load---------------------")
    //     }
    // })
    // const loadPieChart = () =>{
    //     console.log("Before Coming inside")
    //     // var bar = document.getElementById("chart-pie-1").getContext('2d');
    //     // console.log("After Coming inside",bar)
    // }
    
    //Not used - for later use
    var dataCandleStick = [
        ['day', 'a', 'b', 'c', 'd'],
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15],
    ];
    //console.log("data sending from dashboard : ",dataCandleStick)
    return(

        <ParentLayout{...props}>
        <div className="parentbg">
            <div className="pcoded-main-container">
                {/* <!-- [ Main Content ] start --> */}
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            {/* <!-- [ breadcrumb ] start --> */}
        
                            {/* <!-- [ breadcrumb ] end --> */}
                            <div className="main-body">
                                <div className="page-wrapper parentdash">
                                    {/* <!-- [ Main Content ] start --> */}
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
                                            <DashboardHeader/>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
                                            {/* <!-- [ daily sales section ] start --> */}
                                            {/* <!-- [ Recent Users ] start --> */}
                                            <StudentGradeInfo/>
                                            <DashboardPieChart/>
                                        </div>
                                        <div className="col-xl-8 col-md-4 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                                <UpcomingAssignments/>
                                            </div>
                                            <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                                <StudentActivity/>
                                            </div>
                                            <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                                <UpcomingLessons/>
                                            </div>
                                            <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                                <Announcement/>
                                            </div>
                                            <DashboardCandleStick data={{dataCandleStick}}/>
                                            {/* <div className="col-xl-12">
                                                <div className="card">
                                                    <div className="card-header card-headerStyle">
                                                        <h5>Attendance</h5>
                                                    </div>
                                                    <div className="card-block">
                                                        <div className="legendlabel text-center"><span></span><b>Sync Time</b>
                                                        <span className="card-blockSpanStyle"></span><b>Async Time</b></div>
                                                        <div id="chart-google-Candlestick" className="chartStyle"></div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!-- [ Main Content ] end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- [ Main Content ] end --> */}
            </div>
        </div>
        </ParentLayout>
    )
}