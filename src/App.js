import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HeaderNavbar from "./Shared/HeaderNavbar/HeaderNavbar";
import Home from "../src/Components/Home/Home";
import Products from "../src/Components/Home/Products";
import Footer from "./Shared/Footer";

function App() {
    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
            </Routes>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default App;
