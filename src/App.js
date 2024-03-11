import './App.css';
import Navbar from './template/includes/Navbar';
import Homepage from './template/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateBlog from './template/CreateBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluide">
          <Navbar/>
        </div>
        <div className="container">
            <Route path="/" exact component={Homepage} />
            <Route path="/create" component={CreateBlog} />
        </div>
      </Router>
    </div>
  );
}

export default App;
