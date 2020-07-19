import React, { useState, createContext, useEffect } from 'react';
import { setUserOnLocalStorage, getUserFromLocalStorage } from '../../util/localStorage';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {

  const storedUser = getUserFromLocalStorage();
  const [user, setUser] = useState(storedUser);

  useEffect(() => setUserOnLocalStorage(user), [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}