const CourseList = ({courses = []}) => {
  const mappedCourses = courses.map((course, index) => (
    <a key={index} className="panel-block is-active" href="#">
      {course.title}
    </a>
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