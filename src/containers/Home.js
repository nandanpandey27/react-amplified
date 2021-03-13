import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Course } from './../models';
import CourseList from './../components/CourseList'

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const models = await DataStore.query(Course);
      setCourses(models)
    })()
  }, []);

  return (
    <div className="container">
      <div className="columns mt-6">
        <div className="column"></div>
        <div className="column">
          <CourseList courses={courses} />
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default Home;