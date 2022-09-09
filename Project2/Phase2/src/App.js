import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './style.css';
import TopicSection from './TopicSection';
import Template from './Template';
import Navbar from './Navbar';
import Home from './Home';
import CoursePage from './CoursePage';
import history from './History';


export const StateContext = createContext();

function App() {
  const [courseInfo, setCourseInfo] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const fetchurl = 'http://localhost:3500/courses_info'

  let WebsiteState = {
    courseInfo,
    currentCourse,
    setCourseInfo,
    setCurrentCourse,
  }

  useEffect(() => {
    fetch(fetchurl)
    .then(res => res.json())
    .then((json) => {
      setCourseInfo(json)
      setCurrentCourse(json["c_python"]["courses"][0])
      console.log(json["c_python"]["courses"][0])
    })
  },[])

  return (
    <StateContext.Provider value={WebsiteState}>
      <Router history={history}>
        <div>
          <Navbar/>
          <div >
            <Routes>
              <Route path='/' element={<Home/>} exact />
              <Route path='/course' element={<CoursePage/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
