import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
// import { MdOutlineAddIcCall } from "react-icons/md";
import BreakingNews from "../../BreakingNews/BreakingNews";

const Header = () => {
  // ____________________________________________//
  return (
    <div className="bg-slate-600 hidden lg:block ">
      <div className="flex gap-x-2  text-white ">
        <h1 className="px-4">FOLLOW US :</h1>
        <span className="mt-4">
          <SlSocialFacebook />
        </span>
        <span className="mt-4">
          <FiTwitter />
        </span>
        <span className="mt-4">
          <FaInstagram />
        </span>
    
        <span className="-mt-1 ml-5">
          <BreakingNews></BreakingNews>



        </span>

       
      </div>
      {/* -----------Breaking News----------------------- */}



    </div>
  );
};

export default Header;
