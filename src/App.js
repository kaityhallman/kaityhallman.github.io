import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Resume from './components/Resume';
import './App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='container'>
        <Route path="/" exact component={MainPage} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} /> 
      </div>
    </Router>
  );
}

export default App;
