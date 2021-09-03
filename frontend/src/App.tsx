import'./scss/main.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from './components/Products';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Product from './components/Product';
import cartStore from './store/cartStore';
import {Provider} from 'react-redux'
import Cart from './components/Cart'
import CheckComponent from './components/CheckComponent'
function App() {
  return (
   
      <Provider store={cartStore}>
        <Router>
        <NavBar/>
          <Route exact path = "/" component={Home}/>
          <Route path="/products/:id" component={Products}/>
          <Route path="/product/:productCategory/:id" component={Product}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/check" component={CheckComponent}/>
        </Router>
        <Footer/>
      </Provider>
      
   
  );
}

export default App;
