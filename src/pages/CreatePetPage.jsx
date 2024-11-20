import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

const CreatePetPage = () => {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSize, setPetSize] = useState("");
  const [petColour, setPetColour] = useState("");
  const [petMedicalhistory, setPetMedicalhistory] = useState("");
  const [petGender, setPetGender] = useState("");
  const [media, setMedia] = useState(null);
  const [petLocation, setPetLocation] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !petName ||
      !petBreed ||
      !petAge ||
      !petSize ||
      !petColour ||
      !petMedicalhistory ||
      !petGender ||
      !petLocation
    ) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("petName", petName);
    formData.append("petBreed", petBreed);
    formData.append("petAge", petAge);
    formData.append("petSize", petSize);
    formData.append("petColour", petColour);
    formData.append("petMedicalhistory", petMedicalhistory);
    formData.append("petGender", petGender);
    formData.append("petLocation", petLocation);
    if (media) {
      formData.append("media", media);
    }

    try {
      const response = await api.post("/pets/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.message);
      setError(null);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        setError("Error creating pet. Please try again.");
        toast.error("Error creating pet. Please try again.");
      }
    }

    setPetName("");
    setPetBreed("");
    setPetAge("");
    setPetSize("");
    setPetColour("");
    setPetMedicalhistory("");
    setPetGender("");
    setPetLocation("");
    setMedia(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data">
        <h2 className="text-2xl font-bold mb-4">Create Pet</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="petName" className="block text-gray-700 font-bold mb-2">
            Pet Name
          </label>
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petBreed" className="block text-gray-700 font-bold mb-2">
            Pet Breed
          </label>
          <input
            type="text"
            id="petBreed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petAge" className="block text-gray-700 font-bold mb-2">
            Pet Age
          </label>
          <input
            type="text"
            id="petAge"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petSize" className="block text-gray-700 font-bold mb-2">
            Pet Size
          </label>
          <input
            type="text"
            id="petSize"
            value={petSize}
            onChange={(e) => setPetSize(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petColour" className="block text-gray-700 font-bold mb-2">
            Pet Colour
          </label>
          <input
            type="text"
            id="petColour"
            value={petColour}
            onChange={(e) => setPetColour(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petMedicalhistory" className="block text-gray-700 font-bold mb-2">
            Pet Medical History
          </label>
          <input
            type="text"
            id="petMedicalhistory"
            value={petMedicalhistory}
            onChange={(e) => setPetMedicalhistory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="petGender" className="block text-gray-700 font-bold mb-2">
            Pet Gender
          </label>
          <select
            id="petGender"
            value={petGender}
            onChange={(e) => setPetGender(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="petLocation" className="block text-gray-700 font-bold mb-2">
            Pet Location
          </label>
          <input
            type="text"
            id="petLocation"
            value={petLocation}
            onChange={(e) => setPetLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="media" className="block text-gray-700 font-bold mb-2">
            Media
          </label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            onChange={(e) => setMedia(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded"
        >
          Create Pet
        </button>
      </form>
    </div>
  );
};

export default CreatePetPage;
