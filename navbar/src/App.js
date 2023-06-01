import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Music from './Music';


function App() {

  return (
    <div className="App">
      <nav>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about-me' className='nav-item'>About me</Link>
        <Link to="./gallery"  className='nav-item'>Gallery </Link>
      </nav>
      <h1>Linking, routing and embedded assets</h1>
      <Music/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>  
    </div>
  );
}

export default App;
