import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/textbox';
import {useState} from 'react';


function App() {
  const [mode,setMode] = useState('light');

  const togglemode =() =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="textutils" mode={mode} togglemode ={togglemode}></Navbar>
    <div className="container">
        <Textbox heading ="Enter your text below"  mode={mode}></Textbox>
    </div>
    </>
  );
}

export default App;
