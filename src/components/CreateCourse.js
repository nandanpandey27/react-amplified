import { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { useHistory } from 'react-router-dom';
import { Course } from './../models';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const createCourse = async () => {
    const course = await DataStore.save(
        new Course({
        title,
        description,
      })
    );

    if (course) {
      history.push({pathname: '/'})
    }
  }

  return (<div className="card">
    <header className="card-header">
      <p className="card-header-title">
        Create Course
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input onChange={(event) => setTitle(event.target.value)} className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input onChange={(event) => setDescription(event.target.value)} className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button onClick={createCourse} className="button is-primary is-fullwidth">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default CreateCourse;
