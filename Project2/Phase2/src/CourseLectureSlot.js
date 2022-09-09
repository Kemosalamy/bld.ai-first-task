import { createContext, useContext, useState } from 'react';
import './style.css';
import { StateContext } from "./App";

function CourseLectureSlot({tabTitle, defaultState, contentList}){
    const [tabOpen,setTabOpen] = useState(false)

    return (
        <>
            <div onClick={() => setTabOpen(!tabOpen)} className='slot-background'>
                {!tabOpen&&<label style={{fontWeight: 'bolder'}} >∨</label>}
                {tabOpen&&<label style={{fontWeight: 'bolder'}} >∧</label>}
                &nbsp; &nbsp;
                <label>{tabTitle}</label>
                <span style={{float: "right"}}>

                    <label>{contentList.length} lecture{contentList.length>1?'s':''}</label>
                    &nbsp;
                </span>
            </div>
            {tabOpen&&

                <div className='slot-details'>
                    {contentList.map((elm,idx) => {
                        return (
                            <>
                                <i className='material-icons'>play_circle_filled</i> {elm.name}

                                <span style={{float: "right"}}>
                                    <label style={{fontWeight: 'lighter'}}>{elm.duration}</label>
                                </span>
                                <br/>
                            </>
                        )
                    })}


                </div>
            }
        </>

    )

}


export default CourseLectureSlot;
