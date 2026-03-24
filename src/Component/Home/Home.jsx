import React from 'react'
import csImg from '../../image/2.jfif'
import aiImg from '../../image/3.jfif'
import seImg from '../../image/4.jfif'
import isImg from '../../image/1.jfif'
import heroBg from '../../image/home.png'


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${heroBg})`
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">نظام متكامل لإدارة الدراسات العليا</h1>
          <p className="mb-4">طريقك نحو الماجستير والدكتوراه</p>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <button className="btn btn-primary px-4">التقديم للماجستير</button>
            <button className="btn btn-success px-4">التقديم للدكتوراه</button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">ابحث في النظام</h3>

        <div className="row justify-content-center g-4">
          <div className="col-md-5">
            <div className="card shadow-sm p-3 text-center">
              <h5 className="mb-4">بحث باسم الطالب</h5>
              <input className="form-control mb-3 text-center" placeholder="اسم الطالب" />
              <button className="btn btn-primary">بحث</button>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm p-3 text-center">
              <h5 className="mb-4">بحث باسم الدكتور</h5>
              <input className="form-control mb-3 text-center" placeholder="اسم الدكتور" />
              <button className="btn btn-primary">بحث</button>
            </div>
          </div>
        </div>
      </div>

      <hr className="opacity-25 my-5" />

      {/* Departments */}
      <div className="container mb-5">
        <h3 className="text-center mb-4">أقسام الكلية</h3>

        <div className="row g-4">
          <DepartmentCard img={csImg} title="Computer Science" />
          <DepartmentCard img={isImg} title="Information Systems" />
          <DepartmentCard img={aiImg} title="Artificial Intelligence" />
          <DepartmentCard img={seImg} title="Software Engineering" />
        </div>
      </div>
    </>
  )
}

function DepartmentCard({ img, title }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card department-card text-center p-3 h-100">
        <img src={img} alt={title} className="department-img mb-3" />
        <p className="fw-semibold">{title}</p>
        <hr className="opacity-25 w-75 mx-auto" />
        <button className="btn btn-info text-white">بحث</button>
      </div>
    </div>
  )
}
