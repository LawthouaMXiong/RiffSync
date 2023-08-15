import Home from './pages/Home';
import Jammers from './pages/Jammers';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Search from './pages/Search';

import TheTeam from './pages/theTeam';

import Header from './components/Header'

import './assets/css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (       
    <Router>
    
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/jammers' element={<Jammers/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/theTeam' element={<TheTeam/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
