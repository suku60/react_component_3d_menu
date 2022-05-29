import './App.css';
import Menu from './components/Menu/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import Account from './containers/Account/Account';
import Shop from './containers/Shop/Shop';
import Categories from './containers/Categories/Categories';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu
      menuData={[
        {zIndex: "6",
        name: "Home",
        path: "/home"
        },
        {zIndex: "5",
        name: "Account",
        path: "/account"
        },
        {zIndex: "4",
        name: "Shop",
        path: "/shop"
        },
        {zIndex: "3",
        name: "Categories",
        path: "/categories"
        },
        {zIndex: "2",
        name: "About",
        path: "/about"
        },
        {zIndex: "1",
        name: "Contact",
        path: "/contact"
        }]}/>

        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
