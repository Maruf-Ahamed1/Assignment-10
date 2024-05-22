import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)


    const handleLogin = (event) =>{
        event.preventDefault();
        console.log(event.currentTarget)
        const form =new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);
      //----
      signIn(email,password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error =>{
        console.log(error)
      })

    }


  return (
    <div className="max-w-full mx-auto">
      <div className="mx-auto text-center my-2">
        <h1 className="text-2xl font-bold text-orange-400 my-2">
          Login your Account
        </h1>
        <span>
          Do not have an account? Please{" "}
          <Link to="/register">
            <span className="text-blue-600 font-bold">Register</span>
          </Link>
        </span>

        {/* --------Form--------- */}


    <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto my-8">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning text-xl font-bold">Login</button>
        </div>
    </form>

    <span className="text-center mx-auto hidden lg:block">--------------------------------------------------------------------------OR--------------------------------------------------------------------------</span>








     
      </div>
    </div>
  );
};

export default Login;
