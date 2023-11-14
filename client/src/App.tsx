import './App.css';
import Profile from './containers/Profile';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Profile />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
