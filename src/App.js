
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
      <NavLink to="/" activeclassname="active">Home</NavLink>
      <NavLink to="/todos" >Todos</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="details/:id/posts/:userId" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
