import { useState } from 'react';

function useUserProvider() {
  const [listUser, setListUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  return {
    listUser,
    setListUser,
    currentUser,
    setCurrentUser,
  };
}

export default useUserProvider;
