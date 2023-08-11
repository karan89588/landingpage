import React from 'react'
import {Link} from 'react-router-dom'
export default function footer() {
  return (
  <footer className="page-footer font-small blue pt-4" style={{backgroundColor:"#9acd32"}}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-4">
          <h6><i class="fa-solid fa-location-dot"></i> <u>Clement Town, DEHRADUN</u></h6>
          <h6 className='mt-2'><u>Contact Us</u></h6>
          <h6 className='p-1'>
                            <i className="fa-brands fa-facebook-f mx-2"></i>
                            <i className="fa-brands fa-twitter mx-2"></i>
                            <i className="fa-brands fa-linkedin mx-2"></i>
                            <i className="fa-brands fa-instagram mx-2"></i>
                        </h6>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />
        <div className="col-4 mx-auto">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link style={{color:"black",textDecoration:"None"}} to="/team">Team</Link>
            </li>
            <li>
              <Link style={{color:"black",textDecoration:"None"}} to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link style={{color:"black",textDecoration:"None"}} to="/support">Support</Link>
            </li>
            <li>
              <Link style={{color:"black",textDecoration:"None"}} to="/help">Help</Link>
            </li>
          </ul>
        </div>
        <div className="col-4 mx-auto">
        <h6>Newsletter</h6>
        <input type="email" class="form-control" placeholder="Enter Your Email To Subscribe" style={{width:"100%"}}/>
        <button type="button" class="btn bg-dark btn-lg btn-block mt-2" style={{width:"100%",color:"white"}}>Subscribe</button>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3" style={{backgroundColor:"#32cd32"}}>
      © 2023 Copyright:
      <a href="/"> ApniMandi.com</a>
    </div>
  </footer>
  )
}
