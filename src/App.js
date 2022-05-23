import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HeaderNavbar from "./Shared/HeaderNavbar/HeaderNavbar";
import Home from "../src/Components/Home/Home";
import Products from "../src/Components/Home/Products";
import Footer from "./Shared/Footer";
import "swiper/css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import MyProfile from "./Components/MyProfile/MyProfile";
import MyOrders from "./Components/MyOrders/MyOrders";
import AddReview from "./Components/AddReview/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddProduct from "./Components/AddReview/AddProduct";
import ManageProduct from "./Components/Dashboard/ManageProduct";

function App() {
    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route
                        path="addReview"
                        element={<AddReview></AddReview>}
                    ></Route>

                    <Route
                        path="myOrders"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="addNewProduct"
                        element={<AddProduct></AddProduct>}
                    ></Route>
                    <Route
                        path="manageProducts"
                        element={<ManageProduct></ManageProduct>}
                    ></Route>
                </Route>

                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
            </Routes>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default App;
