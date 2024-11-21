import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../Services/api';
import { toast } from 'react-toastify';

const FosterPetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [status, setStatus] = useState('');
  const [fosterParentId, setFosterParentId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/api/fosterpets/${id}`);
        setPet(response.data);
        setStatus(response.data.status);
      } catch (error) {
        toast.error('Error fetching pet details.');
      }
    };

    fetchPet();
  }, [id]);

  const handleStatusUpdate = async () => {
    try {
      const response = await api.put(`/api/fosterpets/status/${id}`, { status });
      toast.success(response.data.message);
      navigate(`/fosterpets/shelter/${response.data.fosterPet.shelter}`);
    } catch (error) {
      toast.error('Error updating status.');
    }
  };

  const handleAssignParent = async () => {
    try {
      const response = await api.put(`/api/fosterpets/assign/${id}`, { fosterParentId });
      toast.success(response.data.message);
      navigate(`/fosterpets/shelter/${response.data.fosterPet.shelter}`);
    } catch (error) {
      toast.error('Error assigning foster parent.');
    }
  };

  if (!pet) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>Medical History: {pet.medicalHistory}</p>
      <p>Status: {pet.status}</p>

      <div className="mb-4">
        <label className="block text-gray-700">Update Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="In Foster Care">In Foster Care</option>
          <option value="Returned">Returned</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded mt-4" onClick={handleStatusUpdate}>Update Status</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Assign Foster Parent</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={fosterParentId}
          onChange={(e) => setFosterParentId(e.target.value)}
          placeholder="Enter Foster Parent ID"
        />
        <button className="bg-green-500 text-white p-2 rounded mt-4" onClick={handleAssignParent}>Assign Foster Parent</button>
      </div>
    </div>
  );
};

export default FosterPetDetail;
