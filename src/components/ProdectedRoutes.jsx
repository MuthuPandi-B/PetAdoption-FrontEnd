import React from 'react';

const ProdectedRoutes = ({children,shelterOnly=false,adopterOnly=false}) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
        return <Navigate to="/login" />;
      }
      if (adopterOnly && role !== "adopter") {
        return <Navigate to="/login" />;
      }
      if (shelterOnly && role !== "shelter") {
        return <Navigate to="/login" />;
      }
    return (
        <div>
            
        </div>
    );
};

export default ProdectedRoutes;