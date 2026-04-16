import React, { useState } from "react";

export default function ApplyProgram() {

  const [formData, setFormData] = useState({
    program: "",
    statement: ""
  });

  const [message, setMessage] = useState("");

  // 👇 اسم الطالب (مؤقت لحد ما تربطه بالـ login)
  const userName = "Ahmed Mohamed";

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.program === "") {
      setMessage("Please select a program");
      return;
    }

    // 👇 ده شكل الطلب اللي هيتبعت
    const newApplication = {
      id: Date.now(),
      studentName: userName,
      program: formData.program,
      status: "Pending",
      statement: formData.statement
    };


  const oldApplications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const updatedApplications = [...oldApplications, newApplication];

  localStorage.setItem(
    "applications",
    JSON.stringify(updatedApplications)
  );

    setMessage("Application submitted successfully ✅");

    // Reset form
    setFormData({
      program: "",
      statement: ""
    });
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="col-md-6 mx-auto">
        <div className="card shadow p-4">

          <h3 className="text-center mb-4">Apply for Program</h3>

          {message && (
            <div className="alert alert-info text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* اختيار البرنامج */}
            <div className="mb-3">
              <label className="form-label">Program</label>
              <select
                className="form-select"
                name="program"
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Select Program</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Statement */}
            <div className="mb-3">
              <label className="form-label">Statement (Optional)</label>
              <textarea
                className="form-control"
                rows="4"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
                placeholder="Why do you want to join?"
              ></textarea>
            </div>

            <button className="btn btn-dark w-100">
              Apply Now
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}