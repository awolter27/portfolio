import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { aboutLoader, projectsLoader } from './apiCalls';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/index.css';
import './styles/fonts.css';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await aboutLoader();
        setAbout(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAbout();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsLoader();
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  if (!about || !projects) {
    return (
      <h1>Loading ...</h1>
    );
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About about={about} />} />
        <Route path='/projects' element={<Projects projects={projects} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;