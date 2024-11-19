import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api, { getFilteredPets } from '../Services/api';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [filterType, setFilterType] = useState('breed'); // Default filter type
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await api.get('/pets/get');
      setPets(response.data);
    } catch (error) {
      toast.error('Error fetching pets.');
    }
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const filters = { [filterType]: filterValue }; // Create a filter object based on the selected type and value
    try {
      const filteredPets = await getFilteredPets(filters);
      setPets(filteredPets);
    } catch (error) {
      toast.error('Error fetching pets.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pet Adoption</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex space-x-2">
          <select onChange={handleFilterTypeChange} value={filterType} className="border p-2 rounded">
            <option value="breed">Breed</option>
            <option value="age">Age</option>
            <option value="size">Size</option>
            <option value="location">Location</option>
          </select>
          <input
            type="text"
            placeholder={`Enter ${filterType}`}
            value={filterValue}
            onChange={handleFilterValueChange}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet._id} className="bg-white p-4 rounded shadow">
            <img src={pet.image} alt={pet.petName} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">Name: {pet.petName}</h2>
            <p className="text-gray-600">Breed: {pet.petBreed}</p>
            <p className="text-gray-600">Age: {pet.petAge}</p>
            <p className="text-gray-600">Gender: {pet.petGender}</p>
            <p className="text-gray-600">Color: {pet.petColour}</p>
            <p className="text-gray-600">Size: {pet.petSize}</p>
            <p className="text-gray-600">Location: {pet.location}</p>
            <p className="text-gray-600">Medical History: {pet.petMedicalhistory}</p>
            <Link to={`/pets/${pet._id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
