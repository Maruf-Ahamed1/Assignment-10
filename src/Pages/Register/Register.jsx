import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);

    const  name= form.get('name')
    const  photo= form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,photo,email,password)

      // _________Create User_____________
  createUser( email,password)
  .then(result => {
    console.log(result.user)
  })
  .catch(error =>{
    console.log(error)
  })



  };





  return (
    <div>
      <div className="mx-auto text-center my-6">
        <h1 className="text-2xl font-bold text-orange-400 my-2">Register Here</h1>
        <p className="from-neutral-400 ">
          Register Now and be part of our community !
        </p>
      </div>
      {/* --------Form______________ */}

      <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo-URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning text-xl font-bold">Register</button>
        </div>
      </form>

      {/* -------------------------------- */}

      <div className="text-center mx-auto my-4">
        <span >
          Already have an account yet? Please {" "}
           <Link to="/login">
            <span className="text-blue-600 font-bold">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
