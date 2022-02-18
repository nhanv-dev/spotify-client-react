
import Routes from './routes/Routes'
import Login from './pages/Login'
import './assets/scss/index.scss'
const code = new URLSearchParams(window.location.search).get('code') 
function App() {
  return code ? <Routes code={code} /> : <Login />;
}

export default App;
