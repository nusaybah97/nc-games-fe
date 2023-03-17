
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Review from './components/Review';
import Nav from './components/Nav';


function App() {
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('desc')
  return (
    <div className="App">
      <Header />
      <Nav setOrderBy={setOrderBy} setSortBy={setSortBy} sortBy={sortBy} orderBy={orderBy}/>
      <Routes>
        <Route path='/' element={<Reviews sortBy={sortBy} orderBy={orderBy}/>}/>
        <Route path='/reviews/:review_id' element={<Review />}/>
        <Route path='/category/:category' element={<Reviews sortBy={sortBy} orderBy={orderBy}/>} />
      </Routes>
    </div>
  );
}

export default App;
