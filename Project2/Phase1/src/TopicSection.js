import './style.css';
import CourseCard from './CourseCard';

function TopicSection({topicInfo}) {

return (
    <div className='content' >
        <div className='courses-overview'>
            <h2 style={{fontSize: "25px"}}>
                {topicInfo.title}
            </h2>

            <h3 style={{fontWeight: "lighter", fontSize: "18px"}}>
                {topicInfo.description}
            </h3>

            <input className="explore-python-button" type="button" value={'Explore '+topicInfo.topic}></input>
            <br/>
            <br/>
            <div className='courses-list'>
                {topicInfo.courses.map((element,index) => {
                    return <CourseCard courseInfo={element} />
                })}
            </div>

        </div>

    </div>
  );
}

export default TopicSection;
