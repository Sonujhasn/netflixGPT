import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUSer } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
});
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUSer())
        navigate("/")
      }
    });
    // unsubscirbe when component did mount
    return ()=> unsubscribe()
  },[])

  const handleGptSearch =() =>{
    //Toggle GPT Search;
     dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
     dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='flex  flex-col justify-center md:flex-row md:justify-between absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-10 '>
       <img 
         className='w-44 mx-auto md:mx-0 sticky md:sticky'
         src={LOGO}
         alt='logo'
       />
      {
        user && (
          <div className='flex p-4 justify-between'>
           {
            showGptSearch &&  <select className='p-1  bg-gray-900 text-white'
                onChange={handleLanguageChange}
              >
                {
                  SUPPORTED_LANGUAGE.map(lang => (
                    <option value={lang.identifier} key ={lang.identifier}>{lang.name}</option>
                  ))
                }
              </select>
           }
            <button className='py-2 px-3 mx-3 rounded-xl bg-purple-800 text-white'
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Homepage" : "GPt Search"}
            </button>
            <img className='hidden md:inline-block w-8 h-8 mt-1 rounded-lg' alt="usericon" src={user?.photoURL}/>
            <button
              onClick={handleSignOut}  
              className='font-bold text-white'
            >Sign Out</button>
         </div>
        )
      }
    </div>
  )
}

export default Header