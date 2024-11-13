import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Services/api";

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await api.get("/pets/get");
      setPets(response.data);
    } catch (error) {
      toast.error("Error fetching pets");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pet Adoption</h1>
      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet._id} className="bg-white p-4 rounded shadow">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">Name:{pet.petName}</h2>
            <p className="text-gray-600">Breed:{pet.petBreed}</p>
            <p className="text-gray-600">Age: {pet.petAge}</p>
            <p className="text-gray-600">Gender: {pet.petGender}</p>
            <p className="text-gray-600">Color: {pet.petColor}</p>
            <p className="text-gray-600">Size: {pet.petSize}</p>
            <p className="text-gray-600">Location: {pet.petLocation}</p>
            <p className="text-gray-600">
              Medical History: {pet.petMedicalhistory}
            </p>
            
            <Link
              to={`/pets/${pet._id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
