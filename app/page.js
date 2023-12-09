// pages/index.js
'use client'
import React, { useState } from 'react';
// import StudentList from '@/components/studentList/StudentList';
import AddStudentForm from '@/components/addStudentForm/AddStudentForm';
import StudentList from './../components/studentList/StudentList';


const Home = () => {
  const [students, setStudents] = useState([]);


  const handleAddStudent =async(newStudent) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify(newStudent);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      await fetch("http://localhost:3000/api/students", requestOptions)
      alert('data is submitted')
      
    } catch (error) {
      console.log('error',error);
    }
    setStudents([...students, { id: Date.now(), ...newStudent }]);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleUpdateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? { ...student, name: updatedStudent.name } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Student Management System</h1>
      <AddStudentForm onAdd={handleAddStudent} />
      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
        onUpdate={handleUpdateStudent}
      />
    </div>
  );
};

export default Home;
