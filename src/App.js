import React, { useState }from 'react';
import  MemberList from "./Components/Members";
import './App.css';

function App() {
  const [ tm, setTm] = useState( [ ] )

  const addTm = person => {
    setTm( ...tm, person )
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Members  />
    </div>
  );
}

export default App;
