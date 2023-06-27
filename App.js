import './App.css';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom'
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Error from './components/Error';
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="ms-2" href="/">
      React Bootstrap
      </Navbar.Brand>
    </Navbar>
     <Router>
       <Routes>
         <Route exact path="/">
          <Posts />
         </Route>
         <Route path="/posts/:index" children={<SinglePost />}></Route>
         <Route path="*">
        <Error />
         </Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
