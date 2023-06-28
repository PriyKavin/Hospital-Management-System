import React from 'react'
import Check from '../Images/Check3.jpg'
import newc from '../Images/Check.png'
import heart from '../Images/Heart.jpg'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patient Care
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Find a Doctor</a></li>
            <li><a class="dropdown-item" href="#">Service Excellence</a></li>
            <li><a class="dropdown-item" href="#">Patient Testimonials</a></li>
            <li><a class="dropdown-item" href="#">Pay Online</a></li>
            <li><a class="dropdown-item" href="#">Medical Feed</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Center of Excellence
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Cardiology</a></li>
            <li><a class="dropdown-item" href="#">Orthopedics</a></li>
            <li><a class="dropdown-item" href="#">Spine</a></li>
            <li><a class="dropdown-item" href="#">Neurology and Neuro Surgery</a></li>
            <li><a class="dropdown-item" href="#">Transplant</a></li>
            <li><a class="dropdown-item" href="#">Nephrology and Urology</a></li>
            <li><a class="dropdown-item" href="#">Obstetrics And Gynaecology</a></li>
            <li><a class="dropdown-item" href="#">Emergency</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Health Information
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Diseases and Conditions</a></li>
            <li><a class="dropdown-item" href="#">Tests & Procedures</a></li>
            <li><a class="dropdown-item" href="#">Understanding Investigation </a></li>
            </ul>
        </li>
        <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Contact US
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Post A Query</a></li>
            <li><a class="dropdown-item" href="#">Consult Doctors Online</a></li>
            <li><a class="dropdown-item" href="#">Book Physical Appointment </a></li>
            </ul>
        </li>
        <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Login
          </a>
          <ul class="dropdown-menu">
         <Link to={'/login'}>
            <li><a class="dropdown-item" href="#">Patient</a></li></Link>
            <Link to={'/doctor'}>
            <li><a class="dropdown-item" href="#">Doctors</a></li></Link>
            <Link to={'/admin'}>
            <li><a class="dropdown-item" href="#">Adminstrator</a></li></Link>
            </ul>
        </li>
        </ul>
        </div>
  </div>
</nav>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Check} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={newc} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={heart} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>  
  )
}

export default Menu
