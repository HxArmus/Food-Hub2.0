import React from 'react'
import './Login_popup.css'
import { assets } from '../../assets/assets';
const Login_popup = ({setShowlogin}) => {
    const [currState,setcurrState] = React.useState("Login");
  return (
    <div className='Login_popup' id='Login_popup'>

        <form action="" className='Login_popup_container'>
            <div className='Login_popup_title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='Login_popup_inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Username' required />}
               
                <input type="text" placeholder='Your Email' required />
                <input type="text" placeholder='Password' required />

            </div>
            <button >{currState==="Sign Up"? "Create Account":"Login"}</button>
            <div className="Login_popup_condition">
                <input type="checkbox" required />
                <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
            </div>
            {currState==="Login"?
            <p>Create a new Account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login_popup
