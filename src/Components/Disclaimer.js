import React from 'react'
import tdis from '../Images/tdis.jpg'
import rdis from '../Images/rdis.jpg'

function Disclaimer() {
  return (
    <div>
        <section class="disclaim_sec">
   <div class="container">
      <div class="row text-center justify-content-center">
         <div class="col-md-8">
            <h2 class="mb-4">Disclaimer</h2>
         </div>
      </div>
      <div class="row g-4 py-3  scroll-items justify-content-center">
         <div class="col-md-4">
            <div class="card pg-card">
               <p class="discl_title">Transplant Disclaimer</p>
               <img src= {tdis} class="disclamier_img_radius" alt="Transplant Disclaimer"/>
               <div class="card-body px-4">
                  <p class="card-text">It has been brought to our notice that some people have received emails purporting to offer money for kidney donation and misusing the name of Hospitals. The public in general and kidney patients in...</p>
                  <a href="" class="text-warning">Read More <i class="fa fa-long-arrow-right"></i> </a>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="card pg-card">
               <p class="discl_title">Recruitment Disclaimer</p>
               <img src={rdis} class="disclamier_img_radius" alt="Recruitment Disclaimer"/>
               <div class="card-body px-4">
                  <p class="card-text"> Hospitals Enterprise Limited brings to your attention that persons not authorized by the Company are circulating/posting fake advertisements inviting applications from candidates for employment in the Company through...</p>
                  <a href="" class="text-warning">Read More <i class="fa fa-long-arrow-right"></i> </a>
               </div>
            </div>
         </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Disclaimer
