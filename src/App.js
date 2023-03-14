import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';


function App() {
  return (
    <div className="App">
      <Header />
      <Reviews />
    </div>
  );
}

export default App;
