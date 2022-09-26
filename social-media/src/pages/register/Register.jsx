import './register.css'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const onRegister = (e) => {
        e.preventDefault();
        if (formDetails.email && formDetails.password && formDetails.name && formDetails.confirmpassword) {
            navigate('/home');
        } else { setError("Please fill all the fields !") }
        setTimeout(() => { setError("") }, 3000);
    }

    const formInitialDetails = {
        email: '',
        name: '',
        password: '',
        confirmpassword: '',
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
                    {/* <div className="loginBox"> */}
                    <form ref={form} className="loginBox">
                        <input placeholder='Username' className="loginInput" value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)} />
                        <input placeholder='Email' className="loginInput" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                        <input placeholder='Password' className="loginInput" value={formDetails.password} onChange={(e) => onFormUpdate('password', e.target.value)} />
                        <input placeholder='Confirm Password' className="loginInput" value={formDetails.confirmpassword} onChange={(e) => onFormUpdate('confirmpassword', e.target.value)} />
                        <button className="loginButton" onClick={onRegister}>Sign Up</button>
                        {error ? <p className='errorMessage'>{error}</p> : <></>}

                        <Link to="/" className="loginRegisterButton">Already have an account?</Link>
                        {/* <button className="loginRegisterButton" >Login to your account</button> */}
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Register