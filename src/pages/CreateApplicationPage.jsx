import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

const CreateApplicationPage = () => {
  const [petId, setPetId] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newApplication = {
        petId,
        applicantName,
        email,
        phone,
        address,
        reason,
      };
      await api.post('/applications/create', newApplication);
      toast.success('Application created successfully!');
      navigate('/'); // Redirect to home page after successful submission
    } catch (error) {
      toast.error('Error creating application.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create an Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Pet ID</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Applicant Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Reason for Adoption</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Application</button>
      </form>
    </div>
  );
};

export default CreateApplicationPage;
