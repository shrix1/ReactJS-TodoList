import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

function NavBar(){
  return(
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
  )
}

ReactDOM.render(
  <div>

    <h1>hello shri wassup</h1>
    <NavBar/> {/*Component*/}

  </div>
  ,
  document.getElementById('root')
);

