import './App.css';
import Navbar from './template/includes/Navbar';
import Homepage from './template/Homepage';

function App() {
  return (
    <div className="App">
      <div className="container-fluide">
        <Navbar/>
      </div>
      <div className="container">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
