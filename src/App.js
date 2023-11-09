import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Slider from './components/Slider';
import ProductsList from './components/productsList';

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Navbar/>

    <Routes>

      <Route 
      path='/' 
      
      element={
      <>
      <Slider/> 
      <ProductsList/>
      </>
      }/>
 
      <Route 
      path='about'
      element={<About/>}
      />

      <Route 
      path='/contact'
      element={<Contact/>}
      />

      <Route 
      path="/product/:productID"
      element={<ProductDetails/>}
      />
    </Routes> 
      


     
    </div>
  );
}

export default App;
