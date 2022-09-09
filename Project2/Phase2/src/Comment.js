import { createContext, useContext, useState } from 'react';
import './style.css';
import { StateContext } from "./App";

function Comment({initials, name, date, stars, comment }){
    let stararray = ['☆','☆','☆','☆','☆'];

    for(let i=0;i<stars;i++)
        stararray[i] = '★';


    return (
        <>
        <div className='comment-background' >
            <div className='comment-left'>
                <div className='initials-div'>
                    <div className='initials-box'>
                        {initials}
                    </div>
                </div>
            </div>
            <div className='comment-right'>
                <label style={{fontWeight: 'bold'}}>{name}</label>
                <br/>
                <span className='second-line'>
                    <span style={{color: '#e59819', fontSize: '23px', textShadow: '1px 1px 2px rgba(0,0,0,0)'}}>
                        {stararray.map((elm,idx) => {return elm;})}
                    </span>

                    {<span style={{color: 'gray'}}>{date}</span>}
                </span>
                {comment}
                <br/>
                <label style={{ fontSize: '13px', fontWeight: 'lighter'}}>Was this review helpful?</label>
                <br/>
                <br/>
                <span className='icon-border'>
                <i className='material-icons'>thumb_up</i>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <span className='icon-border'>
                <i className='material-icons'>thumb_down</i>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className='report-text'>Report</label>
            </div>
        </div>
        <hr/>
        </>
    )

}


export default Comment;
