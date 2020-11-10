import React, { useState, useEffect } from 'react';
import { getInfo, updateInfo } from '../services/GenericServices';
import { STUDENT_ACTIVITY, ACTIVITY_CLEAR } from '../components/ConstFile';

let checkClearance = event => {
    event.preventDefault();
    var tempId = event.target.id;
    const reqData = {
        "studentId": "31231",
        "parentId": "4234234",
        "activityId": "342424"
    }
    // updateInfo(ACTIVITY_CLEAR, reqData).then((respData) => { // commented as API gives CORS policy error

    var respData = { "status": true } // we need to comment this if the api starts to work

    if (respData.status) {
        document.getElementById(tempId).closest('tr').style.display = "none";
    } else {
        alert("Activity is not cleared");
    }
    //})
}

function studentActivity() {
    const [studentActivityList, setActivity] = useState([]);

    useEffect(() => {
        getInfo(STUDENT_ACTIVITY).then((data) => {
            console.log('bloom data is : ', data);
            setActivity(data);
        })
    }, [])

    return (
        <div className="card Recent-Users">
            <div className="card-header card-headerStyle">
                <h5>Ann's Activity</h5>
            </div>
            <div className="card-block px-0 py-0">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {
                                studentActivityList && studentActivityList.map(studentActivityItem => (
                                    <tr className="unread alert alert-dismissible fade show" role="alert">
                                        <td>
                                            <h6 className="mb-1">{studentActivityItem.message}</h6>
                                        </td>
                                        <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close" id={studentActivityItem.id} onClick={checkClearance}>Clear</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default studentActivity