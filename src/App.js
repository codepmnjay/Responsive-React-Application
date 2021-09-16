import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './Componets/Navigation/Navbar';

function App() {
  return (
  <Router>
    <Navbar/>
    <Switch></Switch>
    <Route path = '/' exact/>
  </Router>
     
  );
}

export default App;
