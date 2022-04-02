import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';
import ProductDetails from './ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/orderreview' element={<OrderReview/> }/>
        <Route path='about' element={<About/> }/>
      </Routes>
    </div>
  );
}

export default App;
