import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Dlogo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import Health from './Health';
import Menu from './Menu';
import Buttons from './Buttons';
import Disclaimer from './Disclaimer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
function Header() {
  return (
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
      <div class="container">
        <header
          class="d-flex flex-wrap row align-items-center justify-content-center justify-content-md-between py-1 border-bottom">
          <a href="#" class="d-flex align-items-center col-md-3 col-2 mb-2 mb-md-0 text-dark text-decoration-none">
            <img className="nav__logo" src={logo} alt="" width="40" height="80" />
            Hospital Management System
          </a>
          <div class="col-12 col-md-5 mb-2 d-none d-sm-block justify-content-center mb-md-0">

            <form class="hdr-srch d-flx itm-cntr" id="">
              <div class="position-relative">
                <form class="d-flex me-2" role="search">
                  <input id="search" type="text" class="form-control srch_frm auto-complete-search-desk" name="s" autocomplete="off" value="" placeholder="Search Doctor" />
                  <button id="srch-submit" type="submit" class="btn btn-primary hdr_srch_icon" title="Search"> <i class="fa-solid fa-magnifying-glass"></i></button>
                  <ul class="ajax-search-result" id="ajax-search-result"></ul>
                </form>
              </div>
            </form>

          </div>

          <div class="col-md-4 col-10 text-end">
            <ul class="list-inline mb-1">
              <li class="list-inline-item">
                <div class="hdr_tel_lable">Emergency</div>
                <button type="button" class="btn btn-outline-primary me-2"><a href="tel:1066" id="tl_emergency"> <i
                  class="fa-solid fa-phone pe-2"></i> 1066 </a> </button>
              </li>
              <li class="list-inline-item">
                <div class="hdr_tel_lable text-center"> Lifeline</div>
                <button type="button" class="btn btn-outline-primary me-1"><a href="tel:18605001066" id="tl_apollo_lifeline"> <i
                  class="fa-solid fa-phone pe-1"></i>  1860-500-1066  </a> </button>
              </li>
            </ul>
          </div>

        </header>
      </div>
      <a href="tel:+918069991061" class="btn-quick-callcta">
        <span class="img"><img data-lazyloaded="1" src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/telephone-call-2-1.png" data-src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/telephone-call-2-1.png" data-ll-status="loaded" class="entered litespeed-loaded lazy-loaded" /></span>
        <span class="call-txt">Call Us Now</span>
        <span class="call-num">+91 8069991061</span>
      </a>
 <Menu/>
 <Buttons/>
 <Health/>
 <Disclaimer/>
    </>
  )
}

export default Header
