import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
         
            <h1 className="text-[400px] font-bold">404</h1>
            <h2 className="text-5xl font-bold">Not Found</h2>
            <Link to='/'>
                <button className="btn btn-active btn-accent w-60 mt-10 font-extrabold text-2xl">Go Back</button>
            </Link>

            
        </div>
        
    );
};

export default NotFound;