// pages/index.js
'use client'
import React, { useState } from 'react';
import StudentList from '@/components/studentList/StudentList';
import AddStudentForm from '@/components/addStudentForm/AddStudentForm';


const Home = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
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
