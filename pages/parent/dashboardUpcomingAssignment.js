import React, {Component} from 'react'

class UpcomingAssignments extends Component{
    render(){
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
        );
    }
}
export default UpcomingAssignments