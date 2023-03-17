
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Review from './components/Review';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Reviews />}/>
        <Route path='/reviews/:review_id' element={<Review />}/>
        <Route path='/category/:category' element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
