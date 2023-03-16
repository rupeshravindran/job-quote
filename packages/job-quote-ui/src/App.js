import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './App.css';
import construction from './img/construction.webp';
import { Link, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <header>
        {/* <nav>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button >Post a Job</Button>
            <Button>My Posted Jobs</Button>
            <Button>Advice Center</Button>
            <Button>My Accounts</Button>
          </ButtonGroup>       
        </nav> */}
         <nav>
        <ul>
          <li>
            <Link to="/post-job">POST A JOB</Link>
          </li>
          <li>
            <Link to="/my-posted-job">MY POSTED JOB</Link>
          </li>
          <li>
            <Link to="/advice-center">ADVICE CENTER</Link>
          </li>
          <li>
            <Link to="/my-accounts">MY ACCOUNTS</Link>
          </li>
        </ul>
      </nav>
      </header>
      <main>
      <Routes>
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/my-posted-job" element={<MyPostedJob />} />
        <Route path="/advice-center" element={<AdviceCenter />} />
        <Route path="/my-accounts" element={<MyAccounts />} />
      </Routes>
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

function PostJob() {
  return <h2>POST A JOB</h2>;
}

function MyPostedJob() {
  return <h2>MY POSTED JOB</h2>;
}

function AdviceCenter() {
  return <h2>ADVICE CENTER</h2>;
}

function MyAccounts() {
  return <h2>MY ACCOUNTS</h2>;
}

export default App;
