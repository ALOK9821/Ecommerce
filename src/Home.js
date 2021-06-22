import './App.css';
import Navbarcomp from './components/Navbarcomp';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Signin from './components/Signin';
import Cart from './components/Cart';
function Home() {
  return (
    <div className="app">
      <Navbarcomp/>

      <Carousel />
      <div className="container h-5">
        <Products/>
      </div>
      <div>
      <Signin />
      </div>
    </div>
  );
}

export default Home;
