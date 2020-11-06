import React, { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {STUDENT_ACTIVITY} from '../../components/ConstFile';


function  studentActivity(){
    const [studentActivityList, setActivity] = useState([]);

    useEffect(() => {
        getInfo(STUDENT_ACTIVITY).then((data) => {
            console.log('bloom data is : ',data);
            setActivity(data);
        })
    }, [])

    return(
        <div className="card Recent-Users">
            <div className="card-header card-headerStyle">
                <h5>Ann's Activity</h5>
            </div>
            <div className="card-block px-0 py-0">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                         {   
                           studentActivityList&&studentActivityList.map(studentActivityItem => (
                            <tr className="unread alert alert-dismissible fade show" role="alert">
                                <td>
                           <h6 className="mb-1">{studentActivityItem.message}</h6>
                                </td>
                                <td><a href="" className="label theme-bg2 text-white f-12" data-dismiss="alert" aria-label="Close">Clear</a>
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