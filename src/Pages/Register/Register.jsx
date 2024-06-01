import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  const handleClick = (message) =>{
    toast(     
      <p className="text-red-600 text-xl">{message}</p>
      ) 
    }

 
  //____After Register go Home page____//
  const location = useLocation()
  const navigate = useNavigate()
  console.log("Location in the login page",location)


    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
    

    const {createUser,setUser} = useContext(AuthContext);
    
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    const user = {name,photo,email,password}
    console.log(user)



  //_____Reset error______//
    setError('') 
    setSuccess('')
    

    if(password.length < 6){
      handleClick("Password Should be at least 6 characters or longer")
      return;
   }

  

  
   
      // Register User_____________
  createUser( email,password,name,photo)
  .then(result => {
      setUser(result.user)
    setSuccess("User Created Successfully")
    event.target.reset()
        //______navigate after Register_____//
        navigate(location?.state ? location.state : '/')
  })

  .catch(error =>{
    console.log(error.message)
    setError(error.message)
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
           {
            error && <span className="text-red-700 text-xl">{error}</span>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          {/* {
            success && <p className="text-green-600 text-xl">{success}</p>
          } */}
          <button className="btn btn-outline btn-warning text-xl font-bold">Register</button>
          <ToastContainer />
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
          
        {
        error && <p className="text-red-600 text-xl">{error}</p>
      } 

       {
        success && <p className="text-green-600 text-xl">{success}</p>
      }
      
      </div>
    </div>
  );
};

export default Register;











// -----------------------------------//




// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaRegEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// // import { Helmet } from "react-helmet-async";


// const Register = () => {

//   const handleClick = (message) =>{
//     toast(     
//       <p className="text-red-600 text-xl">{message}</p>
//       ) 
//     }
    

//   //____After Register go Home page____//
//   const location = useLocation()
//   const navigate = useNavigate()
//   console.log("Location in the login page",location)



//   const [registerError, setRegisterError] = useState("");
//   const [success,setSuccess] = useState("")
//   const [showPassword,setShowPassword] = useState(false)


//   const { createUser } = useContext(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log(e.currentTarget);
//     const form = new FormData(e.currentTarget);
//     const name = form.get("name");
//     const photo = form.get("photo");
//     const email = form.get("email");
//     const password = form.get("password");
//     console.log(name, photo, email, password);

//     //_____Reset error______//
//     setRegisterError('') 
    
//       setSuccess('')


//       if(password.length < 6){
//         handleClick("Password Should be at least 6 characters or longer")
//       return;
//     }
//     else if(!/[A-Z]/.test(password)){
//        handleClick('Your password should have at least one Uppercase characters.')
//       return;
//     }
//     else if(!/[a-z]/.test(password)){
//        handleClick('Your password should have at least one Lowercase characters.')
//       return;
//     }


      
//     //_______Create User that means Register_______//
//     createUser(email, password)
//       .then((result) => {
//         console.log(result.user);
//         setSuccess("User Created Successfully")
//         //______navigate after Register_____//
//         navigate(location?.state ? location.state : '/')

//       })

//       .catch((error) => {
//         console.log(error.message);
//         setRegisterError(error.message);
//       });
//   };

//   return (
//     <div>
//             {/* <Helmet>
//                 <title> Art-Maker | Register Page  </title>
//             </Helmet> */}
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col ">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold"> Register Now!</h1>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleRegister} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photo"
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                   />
//                   <span onClick={() => setShowPassword(!showPassword)} className="absolute mt-[52px] ml-56">
//                     {
//                       showPassword ? <FaEyeSlash /> : <FaRegEye />
//                     }
//                     </span>
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button  className="btn btn-primary">Register</button>
//                 <ToastContainer />
//               </div>
//             </form>
//             <p className="text-center mb-5">
//               Do not have an account{" "}
//               <Link className="text-blue-600 font-bold" to="/login">
//                 Login
//               </Link>{" "}
//             </p>


//       {
//         registerError && <p className="text-red-600 text-xl">{registerError}</p>
//       } 

//        {
//         success && <p className="text-green-600 text-xl">{success}</p>
//       }

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
