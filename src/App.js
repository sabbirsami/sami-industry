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
import AddReview from "./Components/AddReview/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddProduct from "./Components/AddReview/AddProduct";
import ManageProduct from "./Components/Dashboard/ManageProduct";
import PageNotFount from "./Shared/PageNotFount";
import Order from "./Components/Home/Order";
import RequireAuth from "./Shared/RequireAuth";
import ManageUser from "./Components/Dashboard/ManageUser";
import RequireAdmin from "./Shared/RequireAdmin";
import ManageReview from "./Components/Dashboard/ManageReview";
import MyProfile from "./Components/Dashboard/MyProfile";
import MyOrders from "./Components/Dashboard/MyOrders";
import EditProfile from "./Components/Dashboard/EditProfile";
import Payment from "./Components/Dashboard/Payment";

function App() {
    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
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
                        path="payment/:paymentId"
                        element={<Payment></Payment>}
                    ></Route>
                    <Route
                        path="editProfile"
                        element={<EditProfile></EditProfile>}
                    ></Route>
                    <Route
                        path="addNewProduct"
                        element={
                            <RequireAdmin>
                                <AddProduct></AddProduct>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageUser"
                        element={
                            <RequireAdmin>
                                <ManageUser></ManageUser>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageProducts"
                        element={
                            <RequireAdmin>
                                <ManageProduct></ManageProduct>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageReview"
                        element={
                            <RequireAdmin>
                                <ManageReview></ManageReview>
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>

                <Route
                    path="/product/:productId"
                    element={
                        <RequireAuth>
                            <Order></Order>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="*" element={<PageNotFount></PageNotFount>}></Route>
            </Routes>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default App;
