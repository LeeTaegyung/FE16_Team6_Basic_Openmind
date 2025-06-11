import { createContext, useContext, useEffect, useState } from 'react';

import { fetchUser } from '@service/api';
import { useParams } from 'react-router-dom';

const UserStateContext = createContext();

export function UserProvider({ children }) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(id).then((data) => setUser(data));
  }, []);

  return (
    <UserStateContext.Provider value={{ user, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
}

export const useGetUser = () => {
  const context = useContext(UserStateContext);

  if (!context) throw new Error('context');

  const { user, setUser } = context;
  return { user, setUser };
};
