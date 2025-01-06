import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// Create a context object
const DataContext = createContext();
// Create a provider component
// const endpoint = import.meta.env.VITE_ENDPOINT_URL
const DataProvider = ({ children }) => {
  

  return (
    <DataContext.Provider
      value={{
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
