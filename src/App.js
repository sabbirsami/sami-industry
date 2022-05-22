import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HeaderNavbar from "./Shared/HeaderNavbar/HeaderNavbar";
import Home from "../src/Components/Home/Home";
import Products from "../src/Components/Home/Products";
import Footer from "./Shared/Footer";
import "swiper/css";
import Login from "./Components/Login/Login";

function App() {
    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default App;
