import { createContext } from 'react';
import useUserProvider, { User } from '../hooks/useUserProvider';

interface UserContextData {
  listUser: never[];
  setListUser: React.Dispatch<React.SetStateAction<never[]>>;
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
  openModal:boolean, 
  handleModal(user:User): void
}

const UserContext = createContext<UserContextData>({
  listUser: [],
  setListUser: () => {},
  currentUser: {
    cell: "",
    dob:{
      date: "",
      age: 0
    },
    email: "",
    gender: "",
    id: {
      name: "",
      value: "",
    },
    location: {
      city: "",
      state: "",
      country: "",
      postcode: 0,
      street: { number: 0, name: "", },
    },
    name: {
      title: "",
      first:"",
      last: "",
    },
    phone: "",
  login: { uuid: "" },
  picture: { large: "" },
  },
  setCurrentUser: () => { },
  openModal:false, 
  handleModal: () => {}
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

