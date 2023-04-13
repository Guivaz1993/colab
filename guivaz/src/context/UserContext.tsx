import { createContext } from 'react';
import useUserProvider from '../hooks/useUserProvider';

interface UserContextData {
  listUser: never[];
  setListUser: React.Dispatch<React.SetStateAction<never[]>>;
  currentUser: {};
  setCurrentUser: React.Dispatch<React.SetStateAction<{}>>;
}

const UserContext = createContext<UserContextData>({
  listUser: [],
  setListUser: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

export function UserProvider(props: any) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;

