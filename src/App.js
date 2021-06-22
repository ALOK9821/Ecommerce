import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home';
import Navbarcomp from './components/Navbarcomp';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Owner from './Owner';
function App() {
  return (
    
    <>
    <Navbarcomp/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Cart" component={Cart}/>
      <Route path="/Signin" component={Signin} />
      <Route path="/Owner" component={Owner} />
    </Switch>
    </>
    
  );
}

export default App;
