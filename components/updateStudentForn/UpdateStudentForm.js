'use client'// components/UpdateStudentForm.js
import React, { useState, useEffect } from 'react';

const UpdateStudentForm = ({ student, onUpdate }) => {
  const [name, setName] = useState(student.name);
  const [rollNumber, setRollNumber] = useState(student.rollNumber);
  const [address, setAddress] = useState(student.address);

  useEffect(() => {
    setName(student.name);
    setRollNumber(student.rollNumber);
    setAddress(student.address);
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && rollNumber.trim() && address.trim()) {
      onUpdate({ id: student.id, name, rollNumber, address });
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Update Student</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter updated name"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter updated roll number"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter updated address"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-green-500 text-white rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;
