import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
    <Router>
     <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'  component={About} />
        <Route path='/resume'  component={Resume} />
        <Route path='/portfolio'  component={Portfolio} />
        <Route path='/contact'  component={Contact} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
