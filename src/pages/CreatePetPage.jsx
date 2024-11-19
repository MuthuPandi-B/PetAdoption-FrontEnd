import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

const CreatePetPage = () => {
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petSize, setPetSize] = useState('');
  const [petColour, setPetColour] = useState('');
  const [petMedicalhistory, setPetMedicalhistory] = useState('');
  const [petGender, setPetGender] = useState('');
//   const [petDescription, setPetDescription] = useState('');
//   const [image, setImage] = useState('');
//   const [location, setLocation] = useState('');

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPet = {
        petName,
        petBreed,
        petAge,
        petSize,
        petColour,
        petMedicalhistory,
        petGender,
        // petDescription,
        // image,
        // location,
      };
      await api.post('/pets/create', newPet);
      if(response.data&&response.data.message){
        toast.success(response.data.message);

      }
      else{
        toast.error(response.data.message);
      }
      setError(null);
      navigate('/'); // Redirect to home page after successful submission
    } catch (error) {
        console.log(error); 
        if(error.response&&error.response.data&&error.response.data.message){
            toast.error(error.response.data.message);
        }else{
            setError(Erro)
        }
    }
   

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create a New Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Breed</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petSize}
            onChange={(e) => setPetSize(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Colour</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petColour}
            onChange={(e) => setPetColour(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Medical History</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petMedicalhistory}
            onChange={(e) => setPetMedicalhistory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petGender}
            onChange={(e) => setPetGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div> */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Pet</button>
      </form>
    </div>
  );
};

export default CreatePetPage;
