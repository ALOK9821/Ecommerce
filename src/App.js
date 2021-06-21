import './App.css';
import Navbarcomp from './components/Navbarcomp';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Signin from './components/Signin';
function App() {
  return (
    <div className="app">
      <Navbarcomp/>
      <Carousel />
      <div className="container h-5">
        <Products/>
      </div>
        <Signin />
   
    </div>
  );
}

export default App;
