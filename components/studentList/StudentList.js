
'use client'// components/StudentList.js
import React, { useState } from 'react';
import UpdateStudentForm from '../updateStudentForn/UpdateStudentForm';


const StudentList = ({ students, onDelete, onUpdate }) => {
  const [editStudentId, setEditStudentId] = useState(null);

  const handleEdit = (id) => {
    setEditStudentId(id);
  };

  const cancelEdit = () => {
    setEditStudentId(null);
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="mb-4">
            {editStudentId === student.id ? (
              <UpdateStudentForm
                student={student}
                onUpdate={(updatedStudent) => {
                  onUpdate(updatedStudent);
                  cancelEdit();
                }}
              />
            ) : (
              <>
                <p className="mb-2">
                  <span className="font-semibold">Name:</span> {student.name}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Roll Number:</span>{' '}
                  {student.rollNumber}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Address:</span>{' '}
                  {student.address}
                </p>
                <div>
                  <button
                    onClick={() => onDelete(student.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
