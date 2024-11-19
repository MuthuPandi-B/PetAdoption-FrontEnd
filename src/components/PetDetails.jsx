import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Services/api';
import { toast } from 'react-toastify';

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        toast.error('Error fetching pet details.');
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{pet.petName}</h1>
      <img src={pet.image} alt={pet.petName} className="w-full h-60 object-cover mb-2" />
      <p>Age: {pet.petAge}</p>
      <p>Breed: {pet.petBreed}</p>
      <p>Gender: {pet.petGender}</p>
      <p>Medical History: {pet.petMedicalhistory}</p>
      <p>Description: {pet.petDescription}</p>
      <Link to={`/apply/${pet._id}`} className="text-blue-500 hover:underline">Adopt</Link>
    </div>
  );
};

export default PetDetailsPage;
