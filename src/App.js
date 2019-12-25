import React from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedNormalLoginForm from './login';
import WrappedRegistrationForm from './signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WrappedNormalLoginForm />
        <WrappedRegistrationForm />
      </header>
    </div>
  );
}

export default App;
