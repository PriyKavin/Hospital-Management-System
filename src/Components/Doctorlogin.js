import { useNavigate, Link, useLocation } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { firebaseConfig } from './firebaseConfig.js';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

function Doctorlogin() {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === '/doctor' ? true:false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ isUserExist, setUserExist ] = useState(false);
  const [ isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  

  const auth = getAuth();

  const validation = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
        return value.length >= 6;
      default:
        break;
    }
  };

  const ctaClickHandler = (e) => {
    e.preventDefault();

    if(!validation('email', email) || !validation('password', password)){
      setEmailValid(validation('email', email));
      setPasswordValid(validation('password', password));
      return;
    }

    if(page){
      signInWithEmailAndPassword(auth, email, password)
      .then( auth => {
        if(auth){
          navigate('/dashboard');
        }
      })
      .catch( error => setUserExist(true));
      // user-not-found
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(
        auth => {
          if(auth){
            navigate('/dashboard');
          }
        })
        .catch( error => setIsEmailUsed(true));
    }
  };

  useEffect(()=>{
    setUserExist(false);
    setIsEmailUsed(false);
  },[location]);
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return(
    <>

    <div class="top_hdr bg-info bg-gradient">
        <nav>
          <div class="container d-flex flex-wrap">
            <ul class="nav">

              < li class="nav-item">
                <a href="https://www.facebook.com"
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="1x" />|
                </a></li>
              < li class="nav-item">
                <a href="https://www.twitter.com" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="1x" />|
                </a></li>
              < li class="nav-item">
                <a href="https://www.instagram.com"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a></li>

            </ul>
            <ul class="nav  d-none d-sm-flex ms-auto">
              <li class="nav-item"><a href="" class="nav-link link-dark px-2">Privacy policy |</a> </li>
              <li class="nav-item"><a href="" class="nav-link link-dark px-2">Disclaimer |</a></li>
              <li class="nav-item "><a href="" class="nav-link link-dark px-2 border-0">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    
    <div className="login dbg">
      <div className="holder">
      <h1 className="m-3 text-dark">{ page ? 'Sign In' : 'Register'}</h1>
        <br/>
        <form>
          <input 
            className="mb-3 form-control" 
            value={email} 
            onChange={emailOnChangeHandler} 
            type="email" 
            placeholder="Email"/>
          { !emailValid && <p className="text-danger">Email is invalid/blank</p> }
          <input 
            className="form-control"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" 
            placeholder="Password"/>
          { !passwordValid && <p className="text-danger">Password is invalid/blank</p>}
          <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>
            { page ? 'Doctor Login' : 'Register'}
          </button>
         
          <button className="btn btn-danger btn-block m-3" onClick={clickHandler}> Cancel
           
          </button>
         
          <br/>
          {
            page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-dark" htmlFor="flexCheckDefault">
              Remember Me 
            </label>
            
          </div>
          }
        </form>
        <br/>
        <br/>
        { isUserExist && <p className="text-danger">User does not exist | Go for Signup</p> }
        { isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p> }
        <div className="login-form-other">
          <div className="login-signup-now">
          { page ? 'New Doctor?' : 'Existing User'} &nbsp;
            <Link className=" " to={page ? '/register' : '/doctor'}>
              { page ? 'Sign up now' : 'Sign In'}
            </Link>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Doctorlogin
