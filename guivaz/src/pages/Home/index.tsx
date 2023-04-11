import { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from '../../services/functions';
import useUser from '../../hooks/useUser';

function Home() {
  const { listUser, setListUser } = useUser();

  const navigate = useNavigate();

  async function fetchList() {
    try {
      const { data, status } = await get(`/?results=5&nat=BR`);
console.log(data.results[0])
      if (status > 299) {
        toast.error(data.message);

        return navigate('/');
      }
      setListUser(data.results);
    } catch (error: any) {
      return toast.error(error.message);
    }
  }

  useEffect(() => {fetchList()}, []);

  return (
    <div className='App'>
      <h1>Busque aqui as suas opções</h1>
      <div className='card'>
        <button onClick={() => fetchList()}>Buscar </button>
      </div>
      {listUser.map ((iten:any) => {
        return <h6 key={iten.login.uuid}>{`${iten.name.first} ${iten.name.last}`}</h6>;
      })}
    </div>
  );
}

export default Home;
