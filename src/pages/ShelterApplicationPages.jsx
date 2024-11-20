import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../Services/api';

const ShelterApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get('/applications/all');
      setApplications(response.data);
    } catch (error) {
      toast.error('Error fetching applications.');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/applications/edit/${id}`, { status });
      toast.success('Application status updated successfully.');
      fetchApplications(); // Refresh applications
    } catch (error) {
      toast.error('Error updating application status.');
    }
  };

  const handleScheduleMeetAndGreet = async (id, meetDate) => {
    try {
      await api.put(`/applications/schedule/${id}`, { meetDate });
      toast.success('Meet-and-Greet scheduled successfully.');
      fetchApplications(); // Refresh applications
    } catch (error) {
      toast.error('Error scheduling Meet-and-Greet.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Review Applications</h1>
      {applications.map((application) => (
        <div key={application._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-bold">{application.petName}</h2>
          <p>Applicant: {application.applicantName}</p>
          <p>Status: {application.status}</p>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded mt-2 mr-2" 
            onClick={() => handleStatusChange(application._id, 'Approved')}
          >
            Approve
          </button>
          <button 
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 mr-2" 
            onClick={() => handleStatusChange(application._id, 'More Information Required')}
          >
            Request More Information
          </button>
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => {
              const meetDate = prompt("Enter meet-and-greet date (YYYY-MM-DD):");
              if (meetDate) {
                handleScheduleMeetAndGreet(application._id, meetDate);
              }
            }}
          >
            Schedule Meet-and-Greet
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShelterApplicationsPage;
