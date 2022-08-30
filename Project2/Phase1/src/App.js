import './style.css';
import TopicSection from './TopicSection';

function App() {

  let topicInfo = {
    topic: 'Python',
    title: 'Expand your career opportunities with Python',
    description: `Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language.
                  Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning.
                  You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal
                  to both beginners and advanced developers alike.`,
    courses: [
      {
        "id": 394676,
        "title": "Learn Python: The Complete Python Programming Course",
        "headline": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        "rating": 4.372561,
        "image": "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
        "instructor": "Avinash Jain",
        "bestseller": true,
        "participants": 41248,
        "price": 16.99
      },
      {
        "id": 394676,
        "title": "Learn Python: The Complete Python Programming Course",
        "headline": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        "rating": 4.372561,
        "image": "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
        "instructor": "Avinash Jain",
        "bestseller": true,
        "participants": 41248,
        "price": 16.99
      },
      {
        "id": 394676,
        "title": "Learn Python: The Complete Python Programming Course",
        "headline": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        "rating": 4.372561,
        "image": "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
        "instructor": "Avinash Jain",
        "bestseller": true,
        "participants": 41248,
        "price": 16.99
      },
    ]
  }

  return (
    <div>
      <TopicSection topicInfo={topicInfo}/>
    </div>
  );
}

export default App;
