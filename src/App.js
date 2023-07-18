
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
      <Link className="home" to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
