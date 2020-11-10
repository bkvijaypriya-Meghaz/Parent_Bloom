import React, { useState, useEffect } from 'react';
import {getInfo} from '../services/GenericServices';
import {PARENT_UPCOMING_ASSIGNMENT} from '../components/ConstFile';

function UpcomingAssignments(){
    const [assignmentList, setAssignmentList] = useState([]);

    useEffect(() => {
        getInfo(PARENT_UPCOMING_ASSIGNMENT).then((data) => {
            //console.log('bloom data is : ',data);
            setAssignmentList(data);
        })
    }, [])

    return(
        <div className="">
            <div className="card user-list">
                <div className="card-header card-headerStyle">
                    <h5>Upcoming Assignment</h5>
                </div>
                <div className="card-block stuprofile_card assignmentryt">
                    <div className="stuasshead">
                        <div className="">Name <span className="float-right">Due Date</span></div>
                    </div>

                    {
                        assignmentList.map((upcomingAssignment) => (
                            <div className="stuasstxt">
                                <div className="">{upcomingAssignment.name} 
                                    <span className="float-right">{upcomingAssignment.dueDate}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
export default UpcomingAssignments