import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Course } from './../models';
import { useParams } from 'react-router-dom';
import CreateVideo from './../components/CreateVideo'

const CourseDetails = (props) => {
  const params = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    (async () => {
      const courseData = await DataStore.query(Course, params.id);
      setCourse(courseData)
    })()
  });

  return (
    <div className="container">
    <div className="columns mt-6">
      <div className="column"></div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <p className="has-text-left">Title</p>
          </div>
          <div className="column">
            <p className="has-text-right">{course && course.title}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className="has-text-left">Description</p>
          </div>
          <div className="column">
            <p className="has-text-right">{course && course.description}</p>
          </div>
        </div>
        <CreateVideo courseId={params.id} />
      </div>
      <div className="column"></div>
    </div>
  </div>
  );
}

export default CourseDetails;