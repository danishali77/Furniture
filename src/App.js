import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Shop from "./Components/Shop";
import About from "./Components/About";
import CheckOut from "./Components/CheckOut";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";  
import ThankYou from "./Components/ThankYou";  
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/ThankYou" element={<ThankYou></ThankYou>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/CheckOut" element={<CheckOut></CheckOut>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
