import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Create from './containers/Create'
import CourseDetails from './containers/CourseDetails'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/course/create">
            <Create />
          </Route>
          <Route path="/course/:id">
            <CourseDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
