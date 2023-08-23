import {useRef} from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./SignUp.css"

function SignUp() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value, 
            passwordRef.current.value
        ).then((user) => {
            console.log(user)
            updateProfile(auth.currentUser,
                {
                displayName: nameRef.current.value
                }).then(() => {
                console.log(auth.currentUser);
                navigate('/SignIn');
            }).catch((error) => {
                console.log(error)
            });
        }).catch((error) => {
            console.log(error)
        });
        

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const data = {
            name,
            email,
            password
        }
        console.log(data)
    }

  return (
    <div className="SignUp">
        <h2>Create Account</h2>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" ref={nameRef} placeholder="Name" name="name"/>
            <label htmlFor="email">Email</label>
            <input type="text" ref={emailRef} placeholder="Email" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordRef} placeholder="Password" name="password"/>
            <div className="remember">
                <input type="checkbox" id="remember" value="remember" name="remember"/>
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button onClick={signup} >Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/SignIn">Login</Link></p>
    </div>
  )
}

export default SignUp