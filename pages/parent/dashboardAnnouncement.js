import React, {Component} from 'react'

class Announcement extends Component{
    render(){
        return(
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
        );
    }
}
export default Announcement