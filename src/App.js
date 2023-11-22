import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
