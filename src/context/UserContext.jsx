import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';

const UserStateContext = createContext(null);

function UserProvider({ id, children }) {
  const [user, setUser] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}/subjects/${id}/`).then((res) => setUser(res.data));
  }, []);
  return (
    <UserStateContext.Provider value={[user, setUser]}>
      {children}
    </UserStateContext.Provider>
  );
}

export default UserProvider;

export const useUserInfo = () => useContext(UserStateContext);
