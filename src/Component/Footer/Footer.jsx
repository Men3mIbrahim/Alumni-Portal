import React from 'react'

export default function Footer() {
  return <>

  <hr className="opacity-25 w-100  mt-5 " />
  <div className=" pb-3 bg-dark  text-center text-white fixed-bottom"> 
    <p className="m-0 mb-1 mt-1 ">
    © 2026 Graduate Studies System
  </p>
    <div className='social-icons text-center d-flex justify-content-center align-items-center '>
                  <i className="fab fa-facebook pe-4 ps-3"></i>
                  |
                  <i className="fab fa-instagram pe-4 ps-3"></i>
                  |
                  <i className="fab fa-twitter pe-4 ps-3"></i>
                  |
                  <i className="fab fa-spotify pe-4 ps-3"></i>
                  |
                  <i className="fab fa-youtube pe-4 ps-3"></i>
    </div>
  </div>
  </>
}
