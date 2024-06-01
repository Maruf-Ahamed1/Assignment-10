import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div className="  font-poppins  max-w-full  mx-auto">
            <Header className="sm:hidden"></Header>
            <Navbar ></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;