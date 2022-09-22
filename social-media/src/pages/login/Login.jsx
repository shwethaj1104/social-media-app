import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const onLogin = (e) => {
        e.preventDefault();
        if (formDetails.email && formDetails.password) {
            navigate('/home');
        } else { setError("Please fill email and password !") }
        setTimeout(() => { setError("") }, 3000);
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
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">Connecting to your friends and family</span>
                </div>
                <div className="loginRight">
                    <form ref={form} className="loginBox">
                        <input placeholder='Email' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} className="loginInput" />
                        <input placeholder='Password' value={formDetails.password} onChange={(e) => onFormUpdate('password', e.target.value)} className="loginInput" />
                        <button className="loginButton" onClick={onLogin}>Login</button>
                        {error ? <p className='errorMessage'>{error}</p> : <></>}
                        <span className="loginForgot">Forgot Password</span>
                        <Link to="/register" className="loginRegisterButton">Create New account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login