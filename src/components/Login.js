import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG,IMG_AVT } from '../utils/constant';

const Login = () => {

   
    const dispatch = useDispatch()
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMsg,setErrorMSg] =useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = ()=>{
        //validate the form data
       const msg = checkValidData(email.current.value,password.current.value)
       setErrorMSg(msg);
      if(msg) return;

      //Sign in Sign up logic
      if(!isSignInForm){
        //sign up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
           .then((userCredentail) =>{
             const user = userCredentail.user;
             updateProfile(user, {
              displayName: name.current.value, photoURL: IMG_AVT
            })
              .then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch( dispatch(
                  addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                  })
                  )
                )
                
              }).catch((error) => {
                setErrorMSg(error.message)
              });
           
           })
           .catch((error) =>{
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMSg(errorCode + "-" + errorMessage)
           })
      }else{

        // sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        )
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMSg(errorCode + "-" + errorMessage)
        });
      }
       
    }

    const toggleSignInFrom = () =>{
       setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
              className='h-screen object-cover md:object-cover md:h-[100%]'
              src={BG_IMG}
              alt='nft'
            />
        </div>
        <form
            onSubmit={(e)=>e.preventDefault()} 
            className='text-white  p-12 bg-black absolute w-[80%] md:w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
            
            {
                !isSignInForm && (
                  <input 
                    ref ={name}
                    type='text' 
                    placeholder='Full Name' 
                    className='p-4 my-3 w-full bg-gray-700'
                  />
                )
            }
            <input 
              ref={email}
              type='text' 
              placeholder='Email Address' 
              className='p-4 my-3 w-full bg-gray-700'
            />
            
            <input
              ref={password} 
              type='password' 
              placeholder='Password' 
              className='p-4 my-3 w-full bg-gray-700'
            />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
            <button 
              className='p-4 my-5 bg-red-700 w-full rounded-lg'
              onClick={handleButtonClick}
            >
                {isSignInForm ? "Sign In" : "Sign Up"} 
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInFrom}>
              {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}  
            </p>
        </form>
    </div>
  )
}

export default Login