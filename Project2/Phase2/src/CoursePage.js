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

    const backToHome = () => {
        WebsiteState.setSearchText('');
        navigate('/')
    }

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
                    <div className='feedback-area'>
                        <div className='rating-area'>
                            <label className='rating-label'>4.4</label>
                            <label className='gold-star-label'>★★★★☆</label>
                            <label className='course-rating'>Course Rating</label>
                        </div>
                        <div className='bars-area'>
                            <div className='outer-bar'> <div style={{width:'50%'}} className='bar'></div> </div>
                            <div className='outer-bar'> <div style={{width:'27%'}} className='bar'></div> </div>
                            <div className='outer-bar'> <div style={{width:'13%'}} className='bar'></div> </div>
                            <div className='outer-bar'> <div style={{width:'6%'}} className='bar'></div> </div>
                            <div className='outer-bar'> <div style={{width:'4%'}} className='bar'></div> </div>

                        </div>
                        <div className='stars-area'>
                        <label className='gold-star-label2'>★★★★★{'(50%)'}</label>
                        <label className='gold-star-label2'>★★★★☆{'(27%)'}</label>
                        <label className='gold-star-label2'>★★★☆☆{'(13%)'}</label>
                        <label className='gold-star-label2'>★★☆☆☆{'(6%)'}</label>
                        <label className='gold-star-label2'>★☆☆☆☆{'(4%)'}</label>

                        </div>

                    </div>

                    <h2>Reviews</h2>
                    <Comment initials='AH' name='Asif H.' stars={3} date='2 weeks ago' comment='Sometimes confusing but was able to clarify. Good job nonetheless.'/>
                    <Comment initials='M' name='M.S.Swaroop' stars={4} date='3 weeks ago' comment='the course is specialized so that we learn ourselves deeply,simple and easy'/>
                    <Comment initials='SR' name='Saurish R.' stars={5} date='2 months ago' comment='In depth concepts of python have been clearly explained. Good chemistry between student and instructor. Fantastic course. Completed every vid and had lot of fun'/>
                    <Comment initials='S' name='Shiristi' stars={5} date='3 months ago' comment='i cant say as i have not taken that many classes yet but so far it is good.

edited( so yeah it was a journey for me many things happen but i am glad they did and also grateful to the person who is guiding me and thanks udemy for these courses really appreciate it !!!)'/>


                </div>


            </div>
            <div className='footer'>
                <div className='top-footer'>
                    Top companies choose Udemy Business to build in-demand career skills.
                    <span style={{float: 'right'}}>
                    <img alt="Nasdaq" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"/>
                    &nbsp;
                    &nbsp;
                    <img alt="Volkswagen" height="44" width="44" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"/>
                    &nbsp;
                    &nbsp;
                    <img alt="Box" height="44" width="67" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"/>
                    &nbsp;
                    &nbsp;
                    <img alt="NetApp" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"/>
                    &nbsp;
                    &nbsp;
                    <img alt="Eventbrite" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"/>

                    </span>
                </div>
                <div className='horizontal-break'>

                </div>
                <div className='mid-footer'>
                    <div className='top-flex'>

                        <div className='flex-column'>
                            Udemy Business
                            <br/>
                            Teach on Udemy
                            <br/>
                            Get the app
                            <br/>
                            About us
                            <br/>
                            Contact us
                        </div>
                        <div className='flex-column'>
                            Careers
                            <br/>
                            Blog
                            <br/>
                            Help and Support
                            <br/>
                            Affiliate
                            <br/>
                            Investors
                        </div>
                        <div className='flex-column'>
                            Terms
                            <br/>
                            Privacy policy
                            <br/>
                            Cookie settings
                            <br/>
                            Sitemap
                            <br/>
                            Accessibility statement
                        </div>
                    </div>

                </div>
                <div className='bot-footer'>
                    <img className='udemy-logo' onClick={() => {backToHome()}} alt="Udemy Logo" src="https://community.udemy.com/t5/image/serverpage/image-id/5267i07ADA4BE049629C1?v=v2"/>
                    <span style={{float: 'right'}}>© 2022 Udemy, Inc.</span>
                </div>

            </div>

        </>
    )

}


export default CoursePage;
