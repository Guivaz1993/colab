import { useState } from 'react';

interface Dob {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
  postcode: number;
  street: { number: number; name: string };
}

export interface User {
  cell: string;
  dob: Dob;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  name: Name;
  phone: string;
  login: { uuid: string };
  picture: { large: string };
}

function useUserProvider() {
  const [listUser, setListUser] = useState([]);
  const [currentUser, setCurrentUser] = useState<User>({
    cell: '',
    dob: {
      date: '',
      age: 0,
    },
    email: '',
    gender: '',
    id: {
      name: '',
      value: '',
    },
    location: {
      city: '',
      state: '',
      country: '',
      postcode: 0,
      street: { number: 0, name: '' },
    },
    name: {
      title: '',
      first: '',
      last: '',
    },
    phone: '',
  login: { uuid: "" },
  picture: { large: "" },
  });
  const [openModal, setOpenModal] = useState(false);

  function handleModal(user: User): void {
    setOpenModal(!openModal);
    setCurrentUser(user);
  }

  return {
    listUser,
    setListUser,
    currentUser,
    setCurrentUser,
    openModal,
    handleModal,
  };
}

export default useUserProvider;
