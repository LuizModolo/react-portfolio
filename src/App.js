import './App.css';
import { Header, Footer, Myprojects, 
  Principal, Competencies, About, Contact } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Principal />
      <About />
      <Competencies />
      <Myprojects />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
