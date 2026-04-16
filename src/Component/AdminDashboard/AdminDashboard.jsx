import React from 'react'
import { useState, useEffect } from 'react';

export default function StudentDashboard() {

  const [applications, setApplications] = useState([])
  useEffect(() => {
    setApplications([
      {
        id: 1,
        studentName: "Ahmed Mohamed",
        program: "Master",
        status: "Pending",
      },
      {
        id: 2,
        studentName: "Sara Ali",
        program: "PhD",
        status: "Approved",
      },
      {
        id: 3,
        studentName: "Sara Ali",
        program: "PhD",
        status: "Approved",
      },
      {
        id: 4,
        studentName: "Sara Ali",
        program: "PhD",
        status: "Approved",
      },
      {
        id: 5,
        studentName: "Sara Ali",
        program: "PhD",
        status: "Approved",
      },
      {
        id: 6,
        studentName: "Omar Hassan",
        program: "Master",
        status: "Rejected",
      },
    ]);
  }, [])



  const updateStatus = (id, newStatus) => {
  setApplications((e) =>
    e.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    )
  );
};




  return <>
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 text-center mb-5">Students Applications</h2>
      <div className='table-responsive'>
        <table className="table table-bordered table-hover text-center">
          <thead className='table-dark'>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Program</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) =>
              <tr key={app.id}>
                <td className='h5'>{index + 1}</td>
                <td className='h5'>{app.studentName}</td>
                <td className='h5'>{app.program}</td>

                <td className='h5'> <span className={`badge 
          ${app.status === 'Approved' ? 'bg-success'
                    : app.status === 'Rejected' ? 'bg-danger'
                      : 'bg-warning text-dark'
                  } `}>
                  {app.status}
                </span>
                </td>

                <td>
  <button
    className="btn btn-m btn-outline-success  me-2 text-dark"
    onClick={() => updateStatus(app.id, "Approved")}
  >
    Approve
  </button>

  <button
    className="btn btn-m btn-outline-danger me-2 text-dark"
    onClick={() => updateStatus(app.id, "Rejected")}
  >
    Reject
  </button>

  <button
    className="btn btn-m btn-outline-warning text-dark"
    onClick={() => updateStatus(app.id, "Pending")}
  >
    Pending
  </button>
</td>

              </tr>)}

          </tbody>
        </table>
      </div>
    </div>

  </>
}
