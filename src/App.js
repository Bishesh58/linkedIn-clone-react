import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './firebase';




function App() {

  // pulling user from userSlice
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
       //user is logged in
       dispatch(login({
         email: userAuth.email,
         uid: userAuth.uid,
         displayName: userAuth.displayName,
         photoUrl: userAuth.photoURL,
       }))
     } else{
       //user is logged out
       dispatch(logout());
     }
   })
  }, [])

  return (
    <div className="app">
      <Header/>
       {!user ? <Login /> :(
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
       )}
      
    </div>
  );
}

export default App;
