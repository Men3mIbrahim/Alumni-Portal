import React, { useState } from 'react'


export default function StudentDashboard() {
  // بيانات وهمية للعرض
  const [applications] = useState([
    { id: 1, program: "Computer Science - Master", status: "Pending" },
    { id: 2, program: "Artificial Intelligence - PhD", status: "Accepted" },
    { id: 3, program: "Information Systems - Master", status: "Pending" },
    { id: 4, program: "Information Systems - PhD", status: "Accepted" },
    { id: 5, program: "Artificial Intelligence - Master", status: "Rejected" },
    { id: 6, program: "Software Engineering - PhD", status: "Accepted" },
  ])

  return (
    <div className="dashboard-page">
      <div className="container py-5">
        <h2 className="mb-4">Welcome, Abdelmenam Ibrahim</h2>

        {/* Application Status */}
        <section className="mb-5">
          <h4 className="mb-3">Your Applications</h4>

          <div className="row g-4">
            {applications.map(app => (
              <div className="col-md-6 col-lg-4" key={app.id}>
                <div className={`card app-card p-3 h-100`}>
                  <h5 className="fw-bold mb-2">{app.program}</h5>
                  <p>Status: <span className={`status ${app.status.toLowerCase()}`}>{app.status}</span></p>
                  <button className="btn btn-outline-primary mt-auto">Upload Documents</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <button className="btn btn-danger mt-4"> <a className=' text-decoration-none text-dark' href="/register">Logout</a></button>
      </div>
    </div>
  )
}
