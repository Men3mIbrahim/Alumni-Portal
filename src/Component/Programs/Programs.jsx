import React from 'react'


export default function Programs() {
  return (
    <div className="programs-page">
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Graduate Programs</h2>

        {/* Master Programs */}
        <h3 className="mb-4 text-primary">Master Programs</h3>
        <div className="row g-4 mb-5">

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Computer Science</h5>
              <p>Duration: 2 Years</p>
              <p>Requirements:<br />Bachelor degree in Computer Science or related field</p>
              <button className="btn btn-outline-primary mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Information Systems</h5>
              <p>Duration: 2 Years</p>
              <p>Requirements:<br />Bachelor degree in Information Systems or related field</p>
              <button className="btn btn-outline-primary mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Artificial Intelligence</h5>
              <p>Duration: 2 Years</p>
              <p>Requirements:<br />Bachelor degree in Computer Science or Engineering</p>
              <button className="btn btn-outline-primary mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Software Engineering</h5>
              <p>Duration: 2 Years</p>
              <p>Requirements:<br />Bachelor degree in Software Engineering or related field</p>
              <button className="btn btn-outline-primary mt-auto">Apply Now</button>
            </div>
          </div>

        </div>

        {/* PhD Programs */}
        <h3 className="mb-4 text-success">PhD Programs</h3>
        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Computer Science</h5>
              <p>Duration: 3 - 5 Years</p>
              <p>Requirements:<br />Master degree in Computer Science</p>
              <button className="btn btn-outline-success mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Information Systems</h5>
              <p>Duration: 3 - 5 Years</p>
              <p>Requirements:<br />Master degree in Information Systems</p>
              <button className="btn btn-outline-success mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Artificial Intelligence</h5>
              <p>Duration: 3 - 5 Years</p>
              <p>Requirements:<br />Master degree in AI or related field</p>
              <button className="btn btn-outline-success mt-auto">Apply Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card program-card h-100 p-3">
              <h5 className="fw-bold mb-3">Software Engineering</h5>
              <p>Duration: 3 - 5 Years</p>
              <p>Requirements:<br />Master degree in Software Engineering</p>
              <button className="btn btn-outline-success mt-auto">Apply Now</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
