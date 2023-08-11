
import './App.css';
import Home from './Component/home'
import About from './Component/about'
import Cart from './Component/cart'
import History from './Component/history'
import Help from './Component/help'
import Blogs from './Component/blogs'
import Support from './Component/support.js'
import Team from './Component/team';
import Offers from './Component/offers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path='/offers' element={<Offers />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
