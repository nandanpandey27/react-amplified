import { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Storage } from 'aws-amplify'

import { Video } from './../models';

const CreateVideo = ({courseId}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState(0);
  const [videoFile, setVideoFile] = useState(null);

  const createVideo = async (e) => {
    e.preventDefault();
    debugger;
    const video = await DataStore.save(
        new Video({
        title,
        description,
        order,
        courseId
      })
    );

    if (video) {
      await Storage.put(video.id, videoFile);
    }
  }

  return (<div className="card">
    <header className="card-header">
      <p className="card-header-title">
        Create Video
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        <form onSubmit={createVideo}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input onChange={(event) => setTitle(event.target.value)} className="input" type="text" placeholder="Title" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input onChange={(event) => setDescription(event.target.value)} className="input" type="text" placeholder="Description" />
            </div>
          </div>
          <div className="field">
            <label className="label">Order</label>
            <div className="control">
              <input onChange={(event) => setOrder(parseInt(event.target.value))} className="input" type="number" placeholder="Order" />
            </div>
          </div>
          <div className="field">
            <label className="label">Video</label>
            <div className="control">
              <input onChange={(event) => setVideoFile(event.target.files[0])} accept=".mov,.mp4" className="input" type="file" placeholder="File" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary is-fullwidth">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>)
};

export default CreateVideo;
