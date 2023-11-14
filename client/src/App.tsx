import './App.css';
import Profile from './containers/PatientAccess';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Profile />
    </div>
  );
}

export default App;
