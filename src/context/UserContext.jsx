import { createContext, useContext, useState } from 'react';

const UserStateContext = createContext(null);
const UserSetterContext = createContext(() => {});

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <UserStateContext.Provider value={user}>
      <UserSetterContext.Provider value={setUser}>
        {children}
      </UserSetterContext.Provider>
    </UserStateContext.Provider>
  );
}

export default UserProvider;

export const useUserInfo = () => useContext(UserStateContext);
export const useUserInfoSetter = () => useContext(UserSetterContext);
