import { createContext, useContext, useEffect, useState } from 'react';
import './style.css';
import { StateContext } from "./App";
import { useNavigate } from 'react-router-dom';
import TopicSection from './TopicSection';

function Home(){
    const WebsiteState = useContext(StateContext);
    const navigate = useNavigate();
    const [curTopic, setCurTopic] = useState('python')
    const [curCoursesList, SetCurCoursesList] = useState('bruh');
    const tpcLst = ['python','excel','web','js','data','aws','draw']

    const changeTopic = (topic) => {
        setCurTopic(topic);
    }

    useEffect(() => {
        if(WebsiteState.courseInfo!==null){
            SetCurCoursesList(<TopicSection topicInfo={WebsiteState.courseInfo['c_' + curTopic]} />)
        }
    },[WebsiteState.courseInfo,curTopic])

    return (
        <>
            <div className="header-area">
                <div className="header-box">
                    <h1>New to Udemy? Lucky you.</h1>
                    <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
                </div>
            </div>
            <div className="mobile-header">
                <h1>New to Udemy? Lucky you.</h1>
                <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
            </div>

            <div className="content">
                <h1>A broad selection of courses</h1>
                <h3 style={{fontWeight: "lighter"}}>Choose from 185,000 online video courses with new additions published every month</h3>
                <div className="course-types">
                    <label id="python" onClick={() => changeTopic('python')} className={curTopic===tpcLst[0]?'highlighted-topic':'idle-topic'}>Python</label>
                    <label id="excel" onClick={() => changeTopic('excel')} className={curTopic===tpcLst[1]?'highlighted-topic':'idle-topic'}>Excel</label>
                    <label id="web" onClick={() => changeTopic('web')} className={curTopic===tpcLst[2]?'highlighted-topic':'idle-topic'}>Web Development</label>
                    <label id="js" onClick={() => changeTopic('js')} className={curTopic===tpcLst[3]?'highlighted-topic':'idle-topic'}>Javascript</label>
                    <label id="data" onClick={() => changeTopic('data')} className={curTopic===tpcLst[4]?'highlighted-topic':'idle-topic'}>Data Science</label>
                    <label id="aws" onClick={() => changeTopic('aws')} className={curTopic===tpcLst[5]?'highlighted-topic':'idle-topic'}>AWS Certification</label>
                    <label id="draw" onClick={() => changeTopic('draw')} className={curTopic===tpcLst[6]?'highlighted-topic':'idle-topic'}>Drawing</label>

                </div>

                    {curCoursesList}

            </div>
            <br/>
            <br/>

            <div className="top-section">
                <div  className="row">
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"/> <b>Design</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"/> <b>Development</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"/> <b>Marketing</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"/> <b>IT and Software</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"/> <b>Personal Development</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"/> <b>Business</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"/> <b>Photography</b></div>
                    <div className="col-sm-4"><img width="100%" src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"/> <b>Music</b></div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>

        </>
    )

}


export default Home;
