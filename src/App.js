import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './layout/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
