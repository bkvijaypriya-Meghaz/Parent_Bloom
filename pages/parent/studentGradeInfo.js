import React, {Component} from 'react'

class StudentGradeInfo extends Component{
    render(){
        return(
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
        );
    }
}
export default StudentGradeInfo