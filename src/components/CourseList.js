import { Link } from 'react-router-dom'

const CourseList = ({courses = []}) => {
  const mappedCourses = courses.map((course, index) => (
    <Link to={`/course/${course.id}`} key={index} className="panel-block">
      {course.title}
    </Link>
  ));

  return (
    <nav className="panel">
      <p className="panel-heading">
        Courses
      </p>
      {mappedCourses}
    </nav>
  )
}

export default CourseList;