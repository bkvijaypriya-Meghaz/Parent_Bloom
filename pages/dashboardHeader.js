import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenericServices';
import {PARENT_DASHBOARD_HEADER} from '../components/ConstFile';

function DashboardHeader() {

    const [parentHeaderInfo,setParentHeaderInfo] = useState([]);

    //const studentProfile = myConstClass.studentProfile;

    useEffect(() => {
        getInfo(PARENT_DASHBOARD_HEADER).then((data) => {
            console.log('getinfo :');
            console.log('bloom data is : ',data);
            setParentHeaderInfo(data);
            
        })
    }, [])

    
    
        return(
            
                <div className="card">
                    <div className="row card-rowStyle">
                        <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card-header card-headerStyle" >
                                <h5>Ms. Jane Doe!  !&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;4th Grade Science</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 text-right parentdashhead">
                            <div className="card-header card-headerStyle" >
                                <h5>Ann Doe !&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Student Summary</h5>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    
}
export default DashboardHeader