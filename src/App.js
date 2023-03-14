import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Review from './components/Review';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Reviews />}/>
        <Route path='/reviews/:review_id' element={<Review />}/>
      </Routes>
    </div>
  );
}

export default App;
