import React, {Component} from 'react'

class UpcomingLessons extends Component{
    render(){
        return(            
            <div className="">
                <div className="card user-list">
                    <div className="card-header card-headerStyle">
                        <h5>Upcoming Lesson</h5>
                    </div>
                    <div className="card-block stuprofile_card assignmentryt">
                        <div className="stuasshead">
                            <div className="">Name <span className="float-right">Schedule Date</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Photosynthesis <span className="float-right">9th Sep 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Chemistry <span className="float-right">12th Sep 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Weight & Scale <span className="float-right">15th Sep 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Atoms <span className="float-right">20th Sep 2021</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpcomingLessons