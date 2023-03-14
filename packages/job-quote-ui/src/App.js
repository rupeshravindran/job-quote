import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './App.css';
import construction from './img/construction.webp';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Post a Job</Button>
            <Button>My Posted Jobs</Button>
            <Button>Advice Center</Button>
            <Button>My Accounts</Button>
          </ButtonGroup>       
        </nav>
      </header>
      <main>
        <div className='App-body'>
          <div></div>
          <div>
            <img src={construction} alt="LinkedIn Logo" />
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default App;
