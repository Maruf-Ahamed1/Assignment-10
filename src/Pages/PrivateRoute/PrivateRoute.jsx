import { useContext } from "react";
import  { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation,  } from "react-router-dom";
import PropTypes from 'prop-types'



const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
// console.log(user)
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
    
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
  // return <Navigate to="/login" state={{ from: location }}></Navigate>;



};

export default PrivateRoute;


PrivateRoute.propTypes ={
    children: PropTypes.node
}