// components/AddStudentForm.js
import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && rollNumber.trim() && address.trim()) {
      onAdd({ name, rollNumber, address });
      setName('');
      setRollNumber('');
      setAddress('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Add Student</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter roll number"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          className="mr-2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
