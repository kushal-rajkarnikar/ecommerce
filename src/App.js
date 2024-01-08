import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContextProvider";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
