import React, {Component} from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {GRADE_INFORMATION} from '../../components/ConstFile';

function StudentGradeInfo(){
    const [studentGradeInfo, setStudentGradeInfo] = useState(0);
    const [gradesList, setGradesList] = useState([]);
    useEffect(() => {
        getInfo(GRADE_INFORMATION).then((data) => {
            setStudentGradeInfo(data);
            setGradesList(data.grades);
        })
    }, [])

    return(
        <div className="card Recent-Users">
            <div className="card-header card-headerStyle">
                <h5>{studentGradeInfo.firstName} Latest Grade</h5>
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
                            {
                            gradesList.map((gradeInfo)=>(
                                <tr className="unread">
                                    <td>
                                        <h6 className="mb-1">{gradeInfo.name}</h6>
                                        <p className="m-0">{studentGradeInfo.firstName} {studentGradeInfo.lastName}'s</p>
                                    </td>
                                    <td>
                                        <h6 className="mb-1">{gradeInfo.classAverage}</h6>
                                        <h6 className="text-muted">
                                            <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                                            {gradeInfo.classAvgScore}
                                        </h6>
                                    </td>
                                    <td>
                                        <h6 className="mb-1">{gradeInfo.myGrade}</h6>
                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{gradeInfo.myScore}</h6>
                                    </td>
                                    <td className="table-responsive-tdStyle textcenter commenticon">
                                        <i className="ti-comment " data-toggle="tooltip" data-html="true" data-placement="bottom" title={gradeInfo.comments[0].comment}></i>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default StudentGradeInfo