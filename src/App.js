
// import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          <Route exact path='/Signup' element={< Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
