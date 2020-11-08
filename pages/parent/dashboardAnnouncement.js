import React, { useState, useEffect } from 'react';
import { getInfo, updateInfo } from '../../services/GenericServices';
import { PARENT_ANNOUNCEMENT, ANNOUNCEMENT_CLEAR } from '../../components/ConstFile';


let checkClearance = event => {
    event.preventDefault();
    var tempId = event.target.id;
    const reqData = {
        "studentId": "31231",
        "parentId": "4234234",
        "activityId": "342424"
    }
    // updateInfo(ANNOUNCEMENT_CLEAR, reqData).then((respData) => { // commented as API gives CORS policy error

    var respData = { "status": false } // we need to comment this if the api starts to work

    if (respData.status) {
        document.getElementById(tempId).closest('tr').style.display = "none";
    } else {
        alert("Announcement is not cleared");
    }
    // })
}
function announcements() {
    const [announcementList, setAnnouncement] = useState([]);

    useEffect(() => {
        getInfo(PARENT_ANNOUNCEMENT).then((data) => {
            //console.log('bloom data is : ',data);
            setAnnouncement(data);
        })
    }, [])

    return (
        <div className="card Recent-Users">
            <div className="card-header card-headerStyle">
                <h5>Announcements</h5>
            </div>
            <div className="card-block px-0 py-0">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {
                                announcementList && announcementList.map(announcementItem => (
                                    <tr className="unread alert alert-dismissible fade show" role="alert">
                                        <td>
                                            <h6 className="mb-1" >{announcementItem.message}</h6>
                                        </td>
                                        <td>
                                            <a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close" id={announcementItem.id} onClick={checkClearance}>Clear</a>
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
export default announcements