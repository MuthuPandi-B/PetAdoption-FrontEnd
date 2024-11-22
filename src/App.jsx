import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePetPage from "./pages/CreatePetPage";
import PetDetails from "./components/PetDetails";
import Footer from "./components/Footer";
import CreateApplicationPage from "./pages/CreateApplicationPage";
import ShelterApplicationsPage from "./pages/ShelterApplicationPages";
import UserApplicationsPage from "./pages/UserApplicationPage";
import EditApplicationPage from "./pages/EditApplicationPage";
import ContactPage from "./pages/ContactPage";
import FosterFosteringPets from "./components/FosterFosteringPets";
import ShelterFosteringPets from "./components/ShelterFosteringPets";
import CreateFosterPet from "./pages/CreateFosterPet";
import CreateAppointmentPage from "./pages/CreateAppointmentPage";
import MessagesPage from "./pages/MessagesPage";
import ContactMessagesPage from "./pages/ContactMessagesPage";
import FavoritePage from "./pages/FavoritesPage";
import ReviewPage from "./pages/ReviewPage";

import EditPetPage from "./pages/EditPetPage";
import ShelterAppointments from "./components/ShelterAppointments";
import AdopterAppointments from "./components/AdopterAppointments";
import FosteredPets from "./components/FosteredPets";
import AboutPage from "./pages/AboutPage";
import ResetPassword from "./components/ResetPassword";
const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createApplication"
            element={<CreateApplicationPage />}
          />
          <Route path="/createpet" element={<CreatePetPage />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="pets/edit/:id" element={<EditPetPage />} />
          <Route path="/application/user" element={<UserApplicationsPage />} />
          <Route path="/application/all" element={<ShelterApplicationsPage/>} />
          <Route path="/application/edit/:id" element={<EditApplicationPage/>} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/message" element={<MessagesPage/>}/>
          <Route path="/appointments/schedule" element={<CreateAppointmentPage/>}/>
          <Route path="/contact/messages" element={<ContactMessagesPage/>}/>
          <Route path="/favorites" element={<FavoritePage/>}/>
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/shelter/fosteringpets" element={<ShelterFosteringPets />} />
          <Route path="/foster/fosteringpets" element={<FosterFosteringPets/>} />
          <Route path="/fosteredpets" element={<FosteredPets/>} />
         <Route path="/fosterpets/create" element={<CreateFosterPet />} />
     <Route path="/allappointments" element={<ShelterAppointments/>} />
          <Route path="/userappointments" element={<AdopterAppointments/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
