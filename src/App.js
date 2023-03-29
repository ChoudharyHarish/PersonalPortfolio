import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Tech from './components/Tech';
import Work from './components/Works';
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 ">
          <Navbar/>
          <Main/>
          <Tech/>
          <Work/>
          <div className = 'relative z-0'> 
              <Contact/>
              <StarsCanvas/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
