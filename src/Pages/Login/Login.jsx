import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {


  const handleClick = (message,color) =>{
    toast(     
      <p className={`${color} text-xl`}>{message}</p>
      ) 
    }


    const [loginError,setLoginError] = useState("")
    const [success,setSuccess] = useState("")



    const {signIn,googleLogin,setUser,githubLogin} = useContext(AuthContext)
  

   //____After Register go Home page____//
   const location = useLocation()
   const navigate = useNavigate()
   console.log("Location in the login page",location)

  const pathName = location.state?.from?.pathname||'/'  //------------------------------


    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = {email,password}
        console.log(user)
      


        //_____Reset error______//
          setLoginError('') 
          setSuccess('')
    


        if(password.length < 6){
          handleClick("Password Should be at least 6 characters or longer","text-red-500")
        return;
      }
      
    else if(password === password){
      handleClick("You are Successfully Login","text-green-600")
      
    }



      //_______Create SignIn_______//
      signIn(email,password)
      .then(result => {
        console.log(result.user)
        event.target.reset()

         //____navigate after login go to home____//
      navigate(pathName,{replace:true})   //---------------------------------------------
 
      })

      .catch(error =>{
        console.log(error)
      })
    }

    



// _____Google Login_____//
    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result =>{
        console.log(result)
        setUser(result.user) //This line for login pic
        // navigate(location?.state ? location.state : '/')
        navigate(pathName,{replace:true})   //---------------------------------------------
      })
      .catch(error =>{
        console.log(error.message)
      })
    }


//_____GitHub Login_____//
    const handleGitHubLogin = () =>{
      githubLogin()
      .then(result =>{
        console.log(result)
        setUser(result.user)
        // navigate(location?.state ? location.state : '/')
        navigate(pathName,{replace:true})   //---------------------------------------------
      })
      .catch(error =>{
        console.log(error.message)
      })
    }



    


    // ________________Return_____________________//

  return (

    <div className="max-w-full mx-auto">
{/*         
            <Helmet>
                <title> Art-Maker | Login Page  </title>
            </Helmet> */}
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

      {/* login with google and gitHub */}
      
      <div className="lg:w-1/2 md:w-3/4 mx-auto my-8">
         <button onClick={handleGoogleLogin} className="btn btn-block text-xl">
          <span><FcGoogle  className="text-3xl"/></span>
          Login with Google</button>
         <br /> <br />
         <button onClick={handleGitHubLogin} className="btn btn-block text-xl">
          <span><FaGithub className="text-3xl" /></span>
          Login with GitHub</button>
      </div>

      <span className="text-center mx-auto hidden lg:block">--------------------------------------------------------------------------OR--------------------------------------------------------------------------</span>

        {/* --------Form--------- */}
    <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto my-8">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="@gmail.com" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

          {/* <span onClick={() => setShowPassword(!showPassword)} className="absolute mt-[52px] ml-48">
                    {
                      showPassword ? <FaEyeSlash /> : <FaRegEye />
                    }
                    </span> */}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning text-xl font-bold">Login</button>
          <ToastContainer />
        </div>
    </form>

    {
         <p className="text-red-600 text-xl">{loginError}</p>
      } 

       {
        <p className="text-green-600 text-xl">{success}</p>
      }
    
      </div>
    </div>
  );
};

export default Login;


// __________________________________________________//

















// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { FaEyeSlash } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { ToastContainer, toast } from 'react-toastify';



// const Login = () => {


//   const handleClick = (message,color) =>{
//     toast(     
//       <p className={`${color} text-xl`}>{message}</p>
//       ) 
      
     
//     }
  
//   const [showPassword,setShowPassword] = useState(false)
//   const [loginError, setLoginError] = useState("");
//   const [success,setSuccess] = useState("")



//   const {signIn,signInWithGoogle,SingInWithFacebook} = useContext(AuthContext)
//   const location = useLocation()
//   const navigate = useNavigate()
//   console.log("Location in the login page",location)




// const handleLogin = e =>{
//     e.preventDefault();
//     console.log(e.currentTarget)               
//     const form = new FormData(e.currentTarget)
//     const email = form.get('email');
//     const password = form.get('password')
//     console.log(email,password)



//     //_____Reset error______//
//     setLoginError('') 
    
//       setSuccess('')


//       if(password.length < 6){
//         handleClick("Password Should be at least 6 characters or longer","text-red-500")
//       return;
//     }
//     else if(!/[A-Z]/.test(password)){
//        handleClick('Your password should have at least one Uppercase characters.',"text-red-500")
//       return;
//     }
//     else if(!/[a-z]/.test(password)){
//        handleClick('Your password should have at least one Lowercase characters.,',"text-red-500")
//       return;
//     }

//     else if(password === password){
//       handleClick("You are Successfully Login","text-green-600")
      
//     }








//     //_______Create User that means SignIn_______//
//     signIn(email,password)
//     .then(result=>{
//       console.log(result.user)

//       //____navigate after login go to home____//
//       navigate(location?.state ? location.state : '/')

//     })
//     .catch(error=>{
//       console.log(error.message)
//     })
    
//   }

// // _______GoogleSignIn added________//
//   const handelGoogleSignIn = () =>{
//     signInWithGoogle()
//     .then(result =>{
//       console.log(result.message)
//       navigate(location?.state ? location.state : '/')
//     })
//     .catch(error=>{
//       console.log(error.message)
//     })
//   }

//   //______FacebookSingIn added_______//
//   const handelFacebookSignIn = () =>{
//     SingInWithFacebook()
//     .then(result =>{
//       console.log(result.message)
//       navigate(location?.state ? location.state : '/')
//     })
//     .catch(error=>{
//       console.log(error.message)
//     })
//   }





  
//     return (
//         <div>

//             <Helmet>
//                 <title> Real Estate | Login Page  </title>
//             </Helmet>
//             {/* <Navbar></Navbar> */}
//             <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col ">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Login now!</h1>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form onSubmit={handleLogin} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email"
//            name="email"
//             placeholder="email"
//              className="input input-bordered" required />
//         </div>


//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type={showPassword ? "text" : "password"}
//           name="password" placeholder="password"
//            className="input input-bordered" required />
//           <span onClick={() => setShowPassword(!showPassword)} className="absolute mt-[52px] ml-48">
//                     {
//                       showPassword ? <FaEyeSlash /> : <FaRegEye />
//                     }
//                     </span>
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Login</button>
//         </div>
//         <ToastContainer />
//       </form>
//       <p className="text-center mb-5">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link> </p>


//       {
//          <p className="text-red-600 text-xl">{loginError}</p>
//       } 

//        {
//         <p className="text-green-600 text-xl">{success}</p>
//       }

//       {/* _____Google OR Facebook SignIn______ */}

//       <p className="text-center flex gap-5 mb-10"> 
//           <button onClick={handelGoogleSignIn} className="btn btn-accent ml-6">Google</button> 
          
//           <button onClick={handelFacebookSignIn} className="btn btn-accent ml-8">Facebook</button> 
//       </p>
//     </div>
//   </div>
//             </div>
            
//         </div>
//     );
// };

// export default Login;