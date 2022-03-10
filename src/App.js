import './App.css';
import { Header, Footer, Myprojects, 
  Principal, Competencies, About, Contact } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header />
      <Principal />
      <About />
      <Competencies />
      <Myprojects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
