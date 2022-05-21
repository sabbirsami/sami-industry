import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import HeaderNavbar from "./Shared/HeaderNavbar/HeaderNavbar";

function App() {
    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default App;
