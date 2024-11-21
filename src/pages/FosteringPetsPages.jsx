import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import { toast } from 'react-toastify';

const FosteringPetsPage = () => {
  const [fosteringPets, setFosteringPets] = useState([]);

  useEffect(() => {
    const fetchFosteringPets = async () => {
      try {
        const response = await api.get('/pets/fostering');
        setFosteringPets(response.data);
      } catch (error) {
        toast.error('Error fetching fostering pets.');
      }
    };

    fetchFosteringPets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fostering Pets</h1>
      {fosteringPets.map((pet) => (
        <div key={pet._id} className="border p-4 rounded mb-4">
          <h2 className="text-2xl font-bold">{pet.petName}</h2>
          <p>Status: {pet.status}</p>
          {pet.status === 'approved' && (
            <>
              <p>Size: {pet.petSize}</p>
              <p>Colour: {pet.petColour}</p>
              <p>Age: {pet.petAge}</p>
              <p>Breed: {pet.petBreed}</p>
              <p>Gender: {pet.petGender}</p>
              <p>Medical History: {pet.petMedicalhistory}</p>
              <p>Location: {pet.petLocation}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update Details</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FosteringPetsPage;
