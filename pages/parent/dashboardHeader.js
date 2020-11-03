import React, {Component} from 'react'

class DashboardHeader extends Component{
    
    render(){
        return(
            
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
            
        );
    }
}
export default DashboardHeader