import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import JobList from './components/JobList';

function App() {
  const [companyName, setCompanyName] = useState('');
  const handleCompanySearch = (value) => {
    setCompanyName(value);
  };
  return (
    <div className="App">
      <Filters onCompanySearch={handleCompanySearch}/>
      <JobList companyName={companyName}/>
    </div>
  );
}

export default App;
