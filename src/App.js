
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Home></Home>
     <Services></Services>
     <Cards></Cards>
    </div>
  );
}

export default App;
