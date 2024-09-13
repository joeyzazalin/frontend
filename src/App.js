
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Item from './components/Item/Item';
import Offers from './components/Offers/Offers';
import NewCollection from './components/NewCollection/NewCollection';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Item/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/men' element={<ShopCategory category='mens'/>}/>
        <Route path='/women' element={<ShopCategory category='women'/>}/>
        <Route path='kids/' element={<ShopCategory category='kids'/>}/>
        <Route path='product' element={<product/>}>
        <Route path=':productId' element={<product/>}/>
        </Route>
         <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
