// src/context/Appcontext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${backendUrl}/api/auth/user-data`, {
            withCredentials: true,
          });
          setUserData(response.data.user);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    } else {
      setUserData(null);
    }
  }, [isLoggedIn, backendUrl]);

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
