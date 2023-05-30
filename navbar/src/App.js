import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about-me' className='nav-item'>About me</Link>
      </nav>
      <h1>Practicing navbar</h1>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>  
    </div>
  );
}

export default App;
