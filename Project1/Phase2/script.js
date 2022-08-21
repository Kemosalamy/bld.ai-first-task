fetch("http://localhost:3000/courses")
  .then((res) => res.json())
  .then((json) => {
    courseDiv = document.getElementById("course-list");
    Object.entries(json).forEach(([key, value]) => {
      let title = value["title"];
      let image = value["image"];
      let author = value["author"];
      let price = value["price"];

      let CourseHTML =
        `
        <div class="course-element">
            <img width="240" height="135" alt="Course Logo" src="` +
        image +
        `">
            <br>
            <label style="font-weight: bold; font-size: 18px">` +
        title +
        `</label>
            <label style="font-weight: lighter">` +
        author +
        `</label>
            <label style="font-weight: bold; font-size: 15px">` +
        price +
        `</label>
        </div>
        `;

      courseDiv.innerHTML += CourseHTML;
    });
  });

const searchButtonPressed = () => {
  let search = document.getElementById("search-bar").value;
  courseDiv = document.getElementById("course-list");
  courseDiv.innerHTML = "";

  fetch("http://localhost:3000/courses")
    .then((res) => res.json())
    .then((json) => {
      courseDiv = document.getElementById("course-list");
      Object.entries(json).forEach(([key, value]) => {
        let title = value["title"];
        let image = value["image"];
        let author = value["author"];
        let price = value["price"];

        let CourseHTML =
          `
            <div class="course-element">
                <img width="240" height="135" alt="Course Logo" src="` +
          image +
          `">
                <br>
                <label style="font-weight: bold; font-size: 18px">` +
          title +
          `</label>
                <label style="font-weight: lighter">` +
          author +
          `</label>
                <label style="font-weight: bold; font-size: 15px">` +
          price +
          `</label>
            </div>
            `;

        if (title.toLowerCase().includes(search.toLowerCase())) {
          courseDiv.innerHTML += CourseHTML;
        }
      });
    });
};
