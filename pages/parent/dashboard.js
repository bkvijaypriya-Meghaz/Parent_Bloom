import ParentLayout from '../../layout/ParentLayout';
import DashboardPieChart from './dashboardPieChart';
import DashboardCandleStick from './dashboardCandleStick';
import useEffect from 'react'

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
                                    {/* <!-- [ daily sales section ] start --> */}
                                    {/* <!-- [ Recent Users ] start --> */}
                                    <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="row card-rowStyle">
                                                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="card-header card-headerStyle" >
                                                        <h5>Ms. Jane Doe !&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;4th Grade Science</h5>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 text-right parentdashhead">
                                                    <div className="card-header card-headerStyle" >
                                                        <h5>Ann Doe &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Student Summary</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="card Recent-Users">
                                            <div className="card-header card-headerStyle">
                                                <h5>Ann Latest Grade</h5>
                                            </div>
                                            <div className="card-block px-0 py-0">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Class Avg</th>
                                                                <th>Ann's Grade</th>
                                                                <th>Comment</th>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Weather Science Rock</h6>
                                                                    <p className="m-0">Ann Doe's</p>
                                                                </td>
                                                                <td>
                                                                    <h6 className="mb-1">C</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>14/20</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="mb-1">A</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>18/20</h6>
                                                                </td>
                                                                <td className="table-responsive-tdStyle textcenter commenticon"><i className="ti-comment " data-toggle="tooltip" data-html="true" data-placement="bottom" title="Review the concepts from our Energy Lesson"></i></td>
                                                                </tr>
                                                            <tr className="unread">
                                                                
                                                                <td>
                                                                    <h6 className="mb-1">Patterns of Earth Quiz</h6>
                                                                    <p className="m-0">Ann Doe's</p>
                                                                </td>
                                                                
                                                                <td>
                                                                    <h6 className="mb-1">B</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>8/10</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="mb-1">B</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>8/10</h6>
                                                                </td>
                                                                <td className="table-responsive-tdStyle textcenter commenticon"><i className="ti-comment " data-toggle="tooltip" data-html="true" data-placement="bottom" title="Review the concepts from our Energy Lesson"></i></td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Chemistry Assignment</h6>
                                                                    <p className="m-0">Ann Doe's</p>
                                                                </td>
                                                                <td>
                                                                    <h6 className="mb-1">B</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>4/5</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="mb-1">A</h6>
                                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>5/5</h6>
                                                                </td>
                                                                <td className="table-responsive-tdStyle textcenter commenticon"><i className="ti-comment " data-toggle="tooltip" data-html="true" data-placement="bottom" title="Review the concepts from our Energy Lesson"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <DashboardPieChart/>
                                    </div>
                                    <div className="col-xl-8 col-md-4 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                            <div className="">
                                                <div className="card user-list">
                                                    <div className="card-header card-headerStyle">
                                                        <h5>Upcoming Assignment</h5>
                                                    </div>
                                                    <div className="card-block stuprofile_card assignmentryt">
                                                        <div className="stuasshead">
                                                            <div className="">Name <span className="float-right">Due Date</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Use of Energy Assessment <span className="float-right">9th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Circuit Interactive Lab <span className="float-right">12th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Claim Evidence Reasoning <span className="float-right">15th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Science Rock <span className="float-right">20th Sep 2021</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                            <div className="card Recent-Users">
                                                <div className="card-header card-headerStyle">
                                                    <h5>Ann's Activity</h5>
                                                </div>
                                                <div className="card-block px-0 py-0">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr className="unread alert alert-dismissible fade show" role="alert">
                                                                    <td>
                                                                        <h6 className="mb-1">Ann sent Ms. Jane Doe a message </h6>
                                                                    </td>
                                                                    <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close">Clear</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="unread alert alert-dismissible fade show" role="alert">
                                                                    <td>
                                                                        <h6 className="mb-1">Ann's chemistry assignment is graded </h6>
                                                                    </td>
                                                                    <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close">Clear</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="unread alert alert-dismissible fade show" role="alert">
                                                                    <td>
                                                                        <h6 className="mb-1">Ann assigned Photosynthesis assignment </h6>
                                                                    </td>
                                                                    <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close">Clear</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                        <div className="">
                                                <div className="card user-list">
                                                    <div className="card-header card-headerStyle">
                                                        <h5>Upcoming Lesson</h5>
                                                    </div>
                                                    <div className="card-block stuprofile_card assignmentryt">
                                                        <div className="stuasshead">
                                                            <div className="">Name <span className="float-right">Schedule Date</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Photosynthesis <span className="float-right">9th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Chemistry <span className="float-right">12th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Weight & Scale <span className="float-right">15th Sep 2020</span></div>
                                                        </div>
                                                        <div className="stuasstxt">
                                                            <div className="">Atoms <span className="float-right">20th Sep 2021</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-4 col-sm-12 col-xs-12">
                                            <div className="card Recent-Users">
                                                <div className="card-header card-headerStyle">
                                                    <h5>Announcements</h5>
                                                </div>
                                                <div className="card-block px-0 py-0">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr className="unread alert alert-dismissible fade show" role="alert">
                                                                    <td>
                                                                        <h6 className="mb-1">Please review Energy Lesson for next period</h6>
                                                                    </td>
                                                                    <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close">Clear</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
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