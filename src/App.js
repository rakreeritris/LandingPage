import "./App.css";
import Imgcarousel from "./components/Imgcarousel";
import BakeryMenu from "./components/BakeryMenu";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar></Navbar>
                <Imgcarousel></Imgcarousel>
                <BakeryMenu></BakeryMenu>
                <ContactInfo></ContactInfo>
              </>
            }
          ></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
