import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [error,setError] = useState()

    const onLogin = (e) => {
        e.preventDefault();
        if(formDetails.email && formDetails.password){
            navigate('/home');
        }else{setError("Please fill email and password !")}
        setTimeout(() => {setError("")}, 3000);
    }

    const formInitialDetails = {
        email: '',
        password: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            {/* <img className='loginImg' src='/assets/social.jfif'></img> */}
            {/* <div className="svgImg">

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#1775EE" d="M23.1,-38C35.2,-28.2,54,-30.7,59.5,-25.2C65,-19.7,57.4,-6.3,48.9,2.4C40.4,11,31,14.8,23.4,16.2C15.9,17.6,10.2,16.6,3.1,25.5C-4,34.4,-12.6,53.2,-18.5,55C-24.3,56.9,-27.6,41.8,-39,31.9C-50.5,22.1,-70.2,17.5,-79.3,6.6C-88.3,-4.3,-86.7,-21.6,-74.3,-27.8C-61.9,-33.9,-38.7,-29,-24.5,-37.9C-10.3,-46.7,-5.2,-69.3,0.2,-69.6C5.5,-69.8,11,-47.8,23.1,-38Z" transform="translate(100 100)" />
</svg>
            </div> */}

            <h3 className="loginLogo">Social Media App</h3>
                <span className="loginDesc">Connecting to your friends and family</span>
            </div>
            <div className="loginRight">
                {/* <div className="loginBox"> */}
                <form ref={form} className="loginBox">
                    <input placeholder='Email'  value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} className="loginInput" />
                    <input placeholder='Password'  value={formDetails.password} onChange={(e) => onFormUpdate('password', e.target.value)} className="loginInput" />
                    <button className="loginButton" onClick={onLogin}>Login</button>
                {error ? <p className='errorMessage'>{error}</p>:<></>}
                    <span className="loginForgot">Forgot Password</span>
                    {/* <button className="loginRegisterButton">Create New account</button> */}
                    <Link to="/register" className="loginRegisterButton">Create New account</Link>
                </form>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Login