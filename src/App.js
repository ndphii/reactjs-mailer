import {
  Route,
  Routes,
} from "react-router-dom";
import Header from './header_footer/header';
import Toeic from "./screen/toeic";
import Home from "./screen/homepage";
import Contact from "./screen/contact"
import Footer from "./header_footer/footer";
import "./style/App.css"
function App() {
  return (
    <div className="backgorund ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Toeic" element={<Toeic />} ></Route>
        <Route path="/Contact" element={<Contact />} ></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
