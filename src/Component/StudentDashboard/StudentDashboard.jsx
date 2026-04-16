import React, { useEffect, useState } from "react";


export default function StudentDashboard() {

  const [application, setApplication] = useState([])

  let userName = 'Ahmed Mohamed'

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];
    setApplication(data);
  }, [])

  let studentApplication = application.filter((app) => app.studentName === userName)
  return <>
    <div className="container mt-5 pt-5">
      <h4 className=" text-center mb-4">My Applications</h4>
      {studentApplication.length === 0 ?
        <p className="text-center text-muted">
          You have not applied to any programs yet.
        </p> : <div className="row">

          {studentApplication.map((app) =>

            <div className="col-md-4" key={app.id}>


              <div className={`card shadow-sm h-100 text-center p-3 border 
                  ${app.status === "Approved"
                  ? "border-success"
                  : app.status === "Rejected"
                    ? "border-danger"
                    : "border-warning"
                }`}>
                <h5>🎓{app.program}</h5>
                <span className={`badge fs-6 p-2
                  ${app.status === "Approved"
                    ? "bg-success"
                    : app.status === "Rejected"
                      ? "bg-danger "
                      : "bg-warning text-dark "
                  }`}>

                  {app.status}
                </span>
              </div>
            </div>
          )}
        </div>}
    </div>


  </>
}
