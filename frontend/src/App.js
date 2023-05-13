import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { aboutLoader, projectsLoader, contactLoader } from './apiCalls';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import './styles/main.css';
import './styles/fonts.css';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});

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
  
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await contactLoader();
        setContact(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContact();
  }, []);

  if (!about || !projects || !contact) {
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
        <Route path='/contact' element={<Contact contact={contact} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;