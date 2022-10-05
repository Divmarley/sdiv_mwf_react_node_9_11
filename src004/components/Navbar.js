import { useState } from 'react';
import '../css/navbar.css';
import '../css/navtry.css';

// import Button from './Button';
import InputField from './InputField';

function Navbar() {
  const loginHandler= function(){
    alert("you atre welcome")
  }
  // // const settingbalance = function(e){
  //   return()
  // }

  const [userName, setUserName]= useState();
    const userNameHandler = function(e){
      setUserName(e.target.value);
    }
    return(
        <nav>
        <p className="userName">Log in to get started</p>
        <img src='logo.png' alt="Logo" className="logo" />
        <form className="login">

        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"

          // inputType="text" 
          // inputPlaceholder="user" 
          // inputClass="login__input login__input--user"
          onChange ={setUserName}
        />
        <InputField 
          inputType="text" 
          inputPlaceholder="PIN" 
          inputClass="login__input login__input--pin"
        />
        <button class="login__btn" onClick={loginHandler}>&rarr;</button>
        </form>
      </nav>
 
      
     );
}

export default Navbar;