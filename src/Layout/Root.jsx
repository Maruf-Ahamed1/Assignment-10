import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="  font-poppins border-4 max-w-full  mx-auto">
            <Header className="sm:hidden"></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;