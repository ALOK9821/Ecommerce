import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home';
import Navbarcomp from './components/Navbarcomp';
import Cart from './components/Cart';
import Signin from './components/Signin';
function App() {
  return (
    
    <>
    <Navbarcomp/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Cart" component={Cart}/>
      <Route path="/Signin" component={Signin} />
    </Switch>
    </>
    
  );
}

export default App;
