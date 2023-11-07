import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import StudentAbout from '../StudentAbout/StudentAbout.jsx';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/allStudents">All Students</Link></li>
        </ul>
        </nav>
            <br/>
            <Route exact path="/">
                <StudentForm />
            </Route>
            <Route exact path="/about">
                <StudentAbout />
            </Route>
            <Route exact path="/allStudents">
            <p>Student list:</p>
            <StudentList />
            </Route>
            </Router>
        </div>
    );
}

export default App;
