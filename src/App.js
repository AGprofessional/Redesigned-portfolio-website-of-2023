import './App.css';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import MainContentTrial from './Components/MainContentTrial';
import NavBar from './Components/NavBar';
import Test from './Components/Test';

function App1() {
  return (
    <div className="App" style={{minWidth:"70vw", justifyContent:"center", marginLeft:"20px", marginRight:"20px"}}>
        <nav>
          <NavBar/>
        </nav>
        <div>
          <MainContentTrial/>
        </div>
        
    </div>
  );
}

export default App1;
