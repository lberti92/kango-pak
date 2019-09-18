import React, { createContext, useState, useEffect } from "react";
import API from "../utils/API";
const context = createContext(null);

// wrapper to go around components to get data
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({loggedIn: false, user: {}});

//  life cycles
  useEffect(() => {
      API.isLoggedIn()
          .then(res => setUser(res.data))
          .catch(err => {
              console.log(err);
          });
  }, [user.loggedIn]);

  return (
      <context.Provider value={user}>
          {children}
      </context.Provider>
  );
};

// render all of the children
UserProvider.context = context;

export default UserProvider;