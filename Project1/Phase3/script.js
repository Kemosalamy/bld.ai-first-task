const fetchurl = 'http://localhost:3000/c_'
let topic = 'python';
let coursesPerGroup = 4;

const createCourseDiv = (courseInfo) => {
    let image = courseInfo.image;
    let title = courseInfo.title;
    let author = courseInfo.instructors[0].name;
    let price = courseInfo.price

    let HTML =
    `
    <div class="course-element">
        <img class="course-logo" alt="Course Logo" src="` + image + `">
        <br>
        <label style="font-weight: bold; font-size: 18px">` + title + `</label>
        <br>
        <label style="font-weight: lighter">` + author + `</label>
        <br>
        <label style="font-weight: bold; font-size: 15px">$` + price + `</label>
    </div>
    `

    return HTML;

}

const createCourseHTML = (courseObject,searchtext) => {
    let carouselContent = ``

    coursesList = []

    for(let i=0;i<courseObject.courses.length;i++){
        if(courseObject.courses[i].title.toLowerCase().includes(searchtext.toLowerCase())){
            coursesList.push(courseObject.courses[i])
        }
    }

    let slides = parseInt((coursesList.length+(coursesPerGroup-1))/(coursesPerGroup));

    for(let i=0;i<slides;i++){
        let groupClass = i==0?'class="carousel-item active"':'class="carousel-item"';
        let courses = ``

        for(let j=(i*coursesPerGroup);j<Math.min((i*coursesPerGroup)+coursesPerGroup,coursesList.length);j++){

            courses += createCourseDiv(coursesList[j]);
        }

        let courseGroup =
        `
        <div `+groupClass+`>
            <div id="course-list" class="course-list">
                `+courses+`
            </div>
        </div>

        `

        carouselContent+=courseGroup

    }


    let courseContent =
    `
    <h2 style="font-size: 25px">
    ` +
        courseObject.header
    + `
    </h2>
    <h3 style="font-weight: lighter; font-size: 18px">
    ` +
        courseObject.description

    + `
    </h3>
    <input class="explore-python-button" type="button" value="Explore `+courseObject.name+`">
    <br>
    <br>


    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        `+
        carouselContent
        +`
        </div>
        <button class="carousel-control-prev dark-back" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next dark-back" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `

    return courseContent;
}

const renderCourses = (subject,searchtext) => {
    let courseDiv = document.getElementById('course-overview');
    courseDiv.innerHTML = "";
    const subjectURL = fetchurl + subject;
    fetch(subjectURL)
    .then(res => res.json())
    .then((json) => {
        let courseContent = createCourseHTML(json,searchtext);
        courseDiv.innerHTML += courseContent;

    })

}


renderCourses(topic,'');

const searchButtonPressed = () => {
    let search = document.getElementById("search-bar").value;
    renderCourses(topic,search);

}


const switchCourses = (label) => {
    topic = label;

    document.getElementById('python').className='idle-topic';
    document.getElementById('excel').className='idle-topic';
    document.getElementById('web').className='idle-topic';
    document.getElementById('js').className='idle-topic';
    document.getElementById('data').className='idle-topic';
    document.getElementById('aws').className='idle-topic';
    document.getElementById('draw').className='idle-topic';

    document.getElementById(label).className='highlighted-topic';
    renderCourses(label,'');
}
