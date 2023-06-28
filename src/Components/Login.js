import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import Header from './Header';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { firebaseConfig } from './firebaseConfig.js';
import { useEffect, useState } from "react";

function Login() {
    initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname === '/login' ? true:false;
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
    return (
        <>
        <div>
        <section class="top-widgets">
         <div class="widget-mr">
         <div class="container text-center">
         <div class="row justify-content-center">
         <div class="col-md-11">
          <div class="row row-cols-3 row-cols-lg-6 g-2 g-lg-4">
            <div class="col">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic" target="_blank" class="tp_widget" id="btn-cta-bb-book-appointment">
            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg" alt="icon" width="64"/>
            <h5>Book Appointment</h5>
                </a>
            </div>
            <div class="col  d-none d-sm-block">
            <a href="https://www.askapollo.com/apollo-prohealth" target="_blank" class="tp_widget" id="btn-cta-bb-book-prohealth">
             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon"/>
            <h5>Book Health Check-Up</h5>
             </a>
              </div>
             <div class="col d-sm-none d-block">
             <a href="tel:08069991066" class="tp_widget" id="btn-cta-bb-book-prohealth">
             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon"/>
             <h5>Book Health Check-Up</h5>
                </a>
             </div>
             <div class="col">
              <a href="https://www.apollo247.com/specialties?utm_campaign=apollo247_specialties&utm_source=icons_below_the_banner&utm_medium=digital" id="btn-cta-bb-consult-online"  target="_blank" class="tp_widget">
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg" alt="icon"/>
               <h5>Consult Online</h5>
                </a>
                </div>
                <div class="col">
                  <a href="https://www.apollopharmacy.in/?utm_campaign=apollopharmacy&utm_source=icons_below_the_banner&utm_medium=digital" id="btn-cta-bb-buy-medicine" target="_blank" class="tp_widget">
                  <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg" alt="icon"/>
                  <h5>Buy Medicine</h5>
                   </a>
                   </div>
                   <div class="col">
                    <a href="https://www.apollohospitals.com/locations/india/?utm_campaign=apollo_locations&utm_source=icons_below_the_banner&utm_medium=digital" id="btn-cta-bb-find-hospital" class="tp_widget">
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg" alt="icon"/>
                    <h5>Find Hospital</h5>
                     </a>
                     </div>
                     <div class="col">
                     <a href="https://www.apollo247.com/health-records/test-report" target="_blank" id="btn-cta-bb-book-labtest" class="tp_widget">
                     <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg" alt="icon"/>
                     <h5>View Health Record</h5>
                     </a>
                     </div> 
                     </div>
                      </div>
                      </div>
                    </div>
           </div>
          <div class="clear-fix"></div>
       
       </section>
       </div>
       <div className="login bg">
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
            { page ? 'Sign In' : 'Register'}
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

export default Login