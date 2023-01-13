import { Routes, Route } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import HomePage from '../HomePage/HomePage';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <main>
      <>
        <NavBar />
        <Routes>
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <HomePage/>
      </>
    </main>
  );
}