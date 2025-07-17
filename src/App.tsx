import Header from "./components/header"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="pt-[108px] md:pt-0">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
