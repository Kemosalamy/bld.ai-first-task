import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import { StateContext } from "./App";
import './style.css';

function CourseCard({courseInfo}) {
    let stararray = [];
    for(let i=0;i<5;i++)
        stararray.push('☆')

    for(let i=0;i<Math.round(courseInfo.rating);i++)
        stararray[i] = '★';

    const navigate = useNavigate()
    const WebsiteState = useContext(StateContext);

    const displayCourse = () => {
        WebsiteState.setCurrentCourse(courseInfo);
        navigate('/course')
    }


return (


    <div onClick={() => {displayCourse()}} className='course-element'>
        <img className='course-logo' alt='Course Logo' src={courseInfo.image} />
        <br/>
        <label style={{fontWeight: 'bold'}}> {courseInfo.title} </label>
        <br/>
        <label style={{fontWeight: "lighter"}}> {courseInfo.instructor} </label>
        <br/>
        <label style={{color: 'gold', textShadow: '1px 1px 2px black', fontWeight: 'bold'}}> {Math.round(courseInfo.rating * 10)/10} {[]} </label>

        <span style={{color: 'gold', textShadow: '1px 1px 2px black'}}>
            {stararray.map((elm,idx) => {return elm;})}
        </span>
        &nbsp;
        &nbsp;
        {<span style={{fontWeight: 'lighter'}}>({19574})</span>}
        <br/>
        <label style={{fontWeight: 'bold', fontSize: '15px'}}>${courseInfo.price}</label>
        {courseInfo.bestseller&&
        <span>
            <br/>
            <br/>
            <label className='bestseller'>Bestseller</label>

        </span>
        }
    </div>
  );
}


//☆★
export default CourseCard;
