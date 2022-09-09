import { createContext, useContext, useEffect, useState } from 'react';
import './style.css';
import { StateContext } from "./App";
import CourseLectureSlot from './CourseLectureSlot';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';
import content from './courseContent'

function CoursePage(){
    const fetchurl = 'http://localhost:3500/courses_info'
    const navigate = useNavigate();
    let WebsiteState = useContext(StateContext);
    let stararray = ['☆','☆','☆','☆','☆'];

    for(let i=0;i<Math.round(WebsiteState.currentCourse.rating);i++)
        stararray[i] = '★';

    console.log(content)

    return (
        <>
            <div className='course-slate'>
                <img className='slate-image' src={WebsiteState.currentCourse.image} />
                <br/>
                <br/>
                <label style={{fontSize: '40px'}}>
                    <span style={{fontWeight: 'bolder'}}>
                        &nbsp;&nbsp;{'$' + WebsiteState.currentCourse.price}
                    </span>
                </label>
                <span style={{color: 'gray'}}>
                    &nbsp;<span style={{textDecoration: 'line-through'}}>$84.99</span> Discount&nbsp;50% off
                </span>
                <br/>
                <br/>
                <span className='buttons-flex'>
                    <button className='add-cart-button'>Add to Cart</button>
                    <button className='buy-now-button'>Buy Now</button>
                    <label style={{fontWeight: 'lighter'}}>30-Day Money-Back Guarantee</label>

                </span>

            </div>
            <div className='course-front-bg'>
                <div className='course-front'>
                    <br/>
                    <label><span className='course-hierarchy'>Development</span> {'>'}
                    <span className='course-hierarchy'>Programming Languages</span> {'>'} {}
                    <span className='course-hierarchy'>Python</span></label>

                    <h1>
                    {WebsiteState.currentCourse.title}
                    </h1>
                    <h3 style={{fontWeight: "lighter"}}>
                    {WebsiteState.currentCourse.headline}
                    </h3>
                    <label style={{color: 'gold', textShadow: '1px 1px 2px black', fontWeight: 'bold'}}> {Math.round(WebsiteState.currentCourse.rating * 10)/10} {[]} </label>

                    <span style={{color: 'gold', textShadow: '1px 1px 2px black'}}>
                        {stararray.map((elm,idx) => {return elm;})}
                    </span>
                    <label>&nbsp; (3,234 ratings) 19,560 students</label>
                    <label>Created by&nbsp;
                        {WebsiteState.currentCourse.instructors.map((elm,idx) => {return (idx!=0?', ':'') + elm.name })}
                    </label>
                    <br/>
                    <br/>

                </div>
            </div>
            <div>
                <div className='course-content'>
                    <br/>
                    <div className='what-learn'>

                        <h2>&nbsp;What you'll learn</h2>
                        <label>✓ Create their own Python Programs</label> <br/>
                        <label>✓ Become an experienced Python Programmer</label> <br/>
                        <label>✓ Parse the web and create their own games</label>
                        <br/>
                        <br/>

                    </div>
                    <br/>
                    <h2>Course Content</h2>
                    {content.map((elm,idx) => {
                        return <CourseLectureSlot
                                tabTitle={elm.tabTitle}
                                defaultState={elm.defaultState}
                                contentList={elm.contentList} />
                    })}

                    <br/>
                    <br/>
                    <h2>Requirements</h2>
                    <ul>
                        <span style={{fontSize: '20px', fontWeight: 'lighter'}}>
                            <li>Macintosh (OSX)/ Windows(Vista and higher) Machine</li>
                            <li>Internet Connection</li>
                        </span>
                    </ul>
                    <h2>Description</h2>
                    <div className='description-text'>
                        <p className='bold'>Do you want to become a programmer? Do you want to learn how to create games,
                            automate your browser, visualize data, and much more?</p>
                        <p>
                        If you’re looking to learn Python for the very <span className='bold'>first time</span> or need a <span className='bold'>quick brush-up</span>,
                        this is the course for you!
                        </p>

                        <p>
                        Python has rapidly become one of the <span className='bold' >most popular programming languages</span> around the
                        world. Compared to other languages such as Java or C++, Python consistently outranks
                        and outperforms these languages in demand from businesses and job availability.
                        The average Python developer makes <span className='bold'>over $100,000</span> - this number is only going to
                        grow in the coming years.
                        </p>

                        <p>
                        The best part? Python is one of the <span className='bold'>easiest coding languages</span> to learn right now.
                        It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python.
                        By the time you finish this course, you'll be an <span className='bold'>absolute pro</span> at programming!
                        </p>
                    </div>

                    <h2>Instructors</h2>
                    <br/>
                    {WebsiteState.currentCourse.instructors.map((elm,idx) => {
                        return (
                            <>
                                <div className='instructor-card'>
                                    <label className='instructor-name'>{elm.name}</label>
                                    <br/>
                                    <label className='instructor-job'>{elm.jop}</label>
                                    <br/>
                                    <img className='instructor-image' src={elm.image} />
                                </div>
                                <br/>
                            </>
                        )
                    })}

                    <br/>

                    <h2>Student Feedback</h2>
                    <h2>Reviews</h2>
                    <Comment initials='AH' name='Asif H.' stars={3} date='2 weeks ago' comment='Sometimes confusing but was able to clarify. Good job nonetheless.'/>
                    <Comment initials='AH' name='Asif H.' stars={3} date='2 weeks ago' comment='Sometimes confusing but was able to clarify. Good job nonetheless.'/>

                    <h2>Footer</h2>
                </div>


            </div>
        </>
    )

}


export default CoursePage;
