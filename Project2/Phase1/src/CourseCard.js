import './style.css';

function CourseCard({courseInfo}) {
    let stararray = [];
    for(let i=0;i<5;i++)
        stararray.push('☆')

    for(let i=0;i<Math.round(courseInfo.rating);i++)
        stararray[i] = '★';

return (


    <div className='course-element'>
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
        {<span style={{fontWeight: 'lighter'}}>({courseInfo.participants})</span>}
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
