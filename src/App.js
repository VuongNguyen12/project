

import { Routes, Route } from 'react-router-dom'
import './root.css'
import Home from './page/home/Home';
import ProductDetail from './page/productDetail/ProductDetail';
import Shop from './page/shop/Shop';
import BlogDetail from './page/blogdetail/BlogDetail';
import Blogs from './page/blogs/Blogs';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Account from './page/account/Account';
import Product from './components/product/Product';
import Products from './components/products/Products';
import Page404 from './page/page404/Page404';


function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Blog' element={<Blogs />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        < Route path='/Account' element={<Account />} />
        <Route path='/ProductDetail' element={<ProductDetail />} />
        <Route path='/Page404' element={<Page404 />}></Route>
        <Route path='/BlogDetail' element={<BlogDetail />}></Route>
      </Routes>

    </div>
  )
}

export default App;
