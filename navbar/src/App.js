import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import logo from './assets/logo.png';

function App() {

  const image = "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/106/original/home.png?1665489684";
  return (
    <div className="App">
      <nav>
       <img src={logo} alt="Logo" height={50}/>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about-me' className='nav-item'>About me</Link>
      </nav>
      <h1>Practicing navbar</h1>
      <img src={image} alt="another logo" height={200} />
      <img src={require("./assets/logo2.png")} height={200} alt="logo2"/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>  
    </div>
  );
}

export default App;
