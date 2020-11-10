import React, { useState, useEffect} from 'react';
import {getInfo} from '../services/GenericServices';
import {PARENT_UPCOMING_LESSONS} from '../components/ConstFile';

function UpcomingLessons(){
    const [lessonList, setLessonList] = useState([]);

    useEffect(() => {
        getInfo(PARENT_UPCOMING_LESSONS).then((data) => {
            //console.log('bloom data is : ',data);
            setLessonList(data);
        })
    }, [])
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

                    {
                        lessonList.map((upcomingLesson) => (
                            <div className="stuasstxt">
                                <div className="">{upcomingLesson.name} 
                                    <span className="float-right">{upcomingLesson.scheduleDate}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
export default UpcomingLessons