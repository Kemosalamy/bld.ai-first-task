

const fetchurl = 'http://localhost:3000/courses'


const createCourseHTML = (image,title,author,price) => {
    let CourseHTML = `
    <div class="course-element">
        <img class="course-logo" alt="Course Logo" src="` + image + `">
        <br>
        <label style="font-weight: bold; font-size: 18px">` + title + `</label>
        <label style="font-weight: lighter">` + author + `</label>
        <label style="font-weight: bold; font-size: 15px">` + price + `</label>
    </div>
    `;

    return CourseHTML;
}



fetch(fetchurl)
.then(res => res.json())
.then((json) => {

    courseDiv = document.getElementById("course-list");
    Object.entries(json).forEach(([key, value]) => {
        let title = value["title"];
        let image = value["image"];
        let author = value["author"];
        let price = value["price"];

        let CourseHTML = createCourseHTML(image,title,author,price);

        courseDiv.innerHTML += CourseHTML;
      })

})




const searchButtonPressed = () => {
    let search = document.getElementById("search-bar").value;
    courseDiv = document.getElementById("course-list");
    courseDiv.innerHTML = ""

    renderCourse(search);

}


const renderCourse = (searchtext) => {
    fetch(fetchurl)
    .then(res => res.json())
    .then((json) => {

        courseDiv = document.getElementById("course-list");
        Object.entries(json).forEach(([key, value]) => {
            let title = value["title"];
            let image = value["image"];
            let author = value["author"];
            let price = value["price"];

            let CourseHTML = createCourseHTML(image,title,author,price);

            if(title.toLowerCase().includes(searchtext.toLowerCase())){
                courseDiv.innerHTML += CourseHTML;
            }

          })

    })
}
