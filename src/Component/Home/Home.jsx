import React from "react";
import heroBg from "../../image/home.png";

export default function Home() {
  return (
    <div>

      {/* 🚀 HERO */}
      <div
        className="text-white py-5 hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})`,
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-md-7">
              <span className="badge bg-warning text-dark mb-3">
                Graduate Portal
              </span>

              <h1 className="fw-bold display-4">
                Start Your Academic Journey 🎓
              </h1>

              <p className="mt-3 text-light fs-5">
                Apply for Master & PhD programs and track everything in one place.
              </p>

              <button className="btn btn-light me-2 mt-3 px-4">
                Apply Now
              </button>

              <button className="btn btn-outline-light mt-3 px-4">
                Explore Programs
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 💡 FEATURES */}
      <div className="container py-5">
        <div className="row g-4">

          {[
            "Easy Application",
            "Track Status",
            "Multiple Programs",
            "Secure System",
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <div className="feature-card p-4 text-center h-100">
                <h5 className="fw-bold">{item}</h5>
                <p className="small ">
                  Simple and fast experience
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🎓 PROGRAMS */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Programs</h2>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="program-card card p-4 h-100 border-0 shadow-sm">
                <h4 className="fw-bold">Master Programs</h4>
                <p className="text-muted">
                  Explore various master degree opportunities
                </p>
                <button className="btn btn-success w-25">
                  View Details
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="program-card card p-4 h-100 border-0 shadow-sm">
                <h4 className="fw-bold">PhD Programs</h4>
                <p className="text-muted">
                  Advanced research and doctoral programs
                </p>
                <button className="btn btn-success w-25">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🧭 HOW IT WORKS */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">How It Works</h2>

        <div className="row g-4 text-center">

          <div className="col-md-4">
            <div className="step-card p-4 h-100">
              <h5>1. Sign Up</h5>
              <p >Create your account بسهولة</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card p-4 h-100">
              <h5>2. Apply</h5>
              <p >Choose your program</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card p-4 h-100">
              <h5>3. Track</h5>
              <p >Follow your application status</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}