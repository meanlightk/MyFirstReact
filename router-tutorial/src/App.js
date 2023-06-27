import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
    </Routes >
  );
};

export default App;
