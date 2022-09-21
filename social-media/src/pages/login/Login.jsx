import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">

            <h3 className="loginLogo">Social Media App</h3>
                <span className="loginDesc">Connecting to your friends and family</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    {/* <button className="loginRegisterButton">Create New account</button> */}
                    <Link to="/register" className="loginRegisterButton">Create New account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login