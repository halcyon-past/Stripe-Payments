import {useRef} from "react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./SignIn.css"

function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const signin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((user) => {
            navigate('/');
            console.log(user)
        }).catch((error) => {
            console.log(error)
        });
    }

  return (
    <div className="SignIn">
        <h2>Login to Your Account</h2>
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" ref={emailRef} placeholder="Email" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordRef} placeholder="Password" name="password"/>
            <div className="remember">
                <input type="checkbox" id="remember" value="remember" name="remember"/>
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button onClick={signin} >Login</button>
        </form>
        <p>New to MyApp? <Link to="/SignUp">SignUp</Link></p>
    </div>
  )
}

export default SignIn