import { useState } from 'react';

function useUserProvider() {
  const [listUser, setListUser] = useState([]);

  return {
    listUser, setListUser
  };
}

export default useUserProvider;
