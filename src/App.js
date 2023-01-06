
import React from 'react';
import Routes from './routes/Routes'
import Login from './pages/Login'
import './assets/scss/index.scss'

function App() {
  const code = new URLSearchParams(window.location.search).get('code')
  const token = sessionStorage.getItem('token')
  return code || token ? <Routes code={code} /> : <Login />;
}

export default App;
 