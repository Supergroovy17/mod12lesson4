
import React from 'react'
import SessionStorageManager from './SessionStorage'

function App() {
  return (
    <div className="App">
      <h1>JWT Session Storage Example</h1>
      <SessionStorageManager tokenKey="jwtToken" />
    </div>
  );
}

export default App;
