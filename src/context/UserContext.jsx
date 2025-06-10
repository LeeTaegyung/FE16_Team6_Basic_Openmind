import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserStateContext = createContext(null);

const BASE_URL = import.meta.env.VITE_BASE_URL;

function UserProvider({ children }) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/subjects/${id}/`).then((res) => setUser(res.data));
  }, []);

  return (
    <UserStateContext.Provider value={{ user, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
}

export default UserProvider;

export const useGetUser = () => {
  const context = useContext(UserStateContext);

  if (!context) throw new Error('context');

  const { user, setUser } = context;
  return { user, setUser };
};
