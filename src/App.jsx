import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, fetchCount } from './store/counterSlice';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { value, status } = useSelector((state) => state.counter);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </nav>

        <div className="counter">
          <h2>Redux Counter: {value}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button 
            onClick={() => dispatch(fetchCount(5))} 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Loading...' : 'Async Increment'}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
