import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../Services/api';
import { toast } from 'react-toastify';


const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/pets/${id}`); // Adjusted endpoint
        setPet(response.data);
      } catch (error) {
        toast.error('Error fetching pet details.');
      }
    };
    fetchPet();
  }, [id]);
  const handleDelete = async () => {
    try {
      await api.delete(`/pets/${id}`);
      toast.success('Pet deleted successfully.');
      navigate('/');
    } catch (error) {
      toast.error('Error deleting pet.');
    }
  };
  const handleEdit = () => {
    navigate(`/pets/edit/${id}`);
  };
  const handlestatusUpdate= async () => {
 
  };

  if (!pet) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{pet.petName}</h1>
      {pet.media && (
        <div className="mb-4">
          {pet.media.endsWith(".mp4") ? (
            <video controls className="w-full h-60 object-cover mb-2">
              <source src={pet.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={pet.media}
              alt={pet.petName}
              className="w-60 h-60 object-cover mb-2"
            />
          )}
        </div>
      )}
      <p>Size: {pet.petSize}</p>
      <p>Colour: {pet.petColour}</p>
      <p>Age: {pet.petAge}</p>
      <p>Breed: {pet.petBreed}</p>
      <p>Gender: {pet.petGender}</p>
      <p>Medical History: {pet.petMedicalhistory}</p>
      <p>Location: {pet.petLocation}</p>
      {role === "shelter" && (
        <>
          {" "}
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleEdit}
          >
            Edit
          </button>{" "}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2"
            onClick={handleDelete}
          >
            Delete
          </button>{" "}
        </>
      )}{" "}
      {role === "foster" && (
        <>
          {" "}
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => handleStatusUpdate("Fostered")}
          >
            Update Status to Fostered
          </button>{" "}
        </>
      )}{" "}
      {role === "adopter" && (
        <>
          {" "}
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Add to Favorites
          </button>{" "}
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-2">
            Contact
          </button>{" "}
          <Link
            to={`/apply/${pet._id}`}
            className="text-blue-500 hover:underline mt-4 block"
          >
            Adopt
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default PetDetailsPage;
