import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Services/api';
import { toast } from 'react-toastify';

const FosterPetList = () => {
  const { shelterId } = useParams();
  const [fosterPets, setFosterPets] = useState([]);
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchFosterPets = async () => {
      try {
        const response = await api.get(`/api/fosterpets/shelter/${shelterId}`);
        setFosterPets(response.data);
      } catch (error) {
        toast.error('Error fetching foster pets.');
      }
    };

    fetchFosterPets();
  }, [shelterId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Foster Pets</h1>
      {role === 'shelter_admin' && (
        <Link to="/fosterpets/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">Create Foster Pet</Link>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fosterPets.map((pet) => (
          <div key={pet._id} className="border p-4 rounded">
            <h2 className="text-2xl font-bold">{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Medical History: {pet.medicalHistory}</p>
            <p>Status: {pet.status}</p>
            <Link to={`/fosterpets/${pet._id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FosterPetList;
