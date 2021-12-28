import {Lander} from './Components/Lander'
import './App.css';
import {VirtualPage} from './Components/SecondPage/VirtualPage'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <h1>this is APP</h1>
     <BrowserRouter>
    <Link to='/'></Link>
     <Switch>
      <Route exact path={'/'}><Lander /></Route>
      <Route path={'/virtual'} ><VirtualPage /></Route>
     </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
