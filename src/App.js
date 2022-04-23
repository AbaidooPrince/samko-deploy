
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage';
import Footer from './views/sections/Footer';
// import './App.css';
console.log('api', process.env.REACT_APP_BASE_API_URL)
function App() {
  return (
    <div className="">
      <div className="sticky top-0 z-10">
      <Header></Header>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </div>
      <div className=''>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
