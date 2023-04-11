import { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from '../../services/functions';
import useUser from '../../hooks/useUser';
import UserCard from '../../components/Card';

function Home() {
  const [listUser, setListUser ] = useState([]);

  const navigate = useNavigate();

  async function fetchList() {
    try {
      const { data, status } = await get(`/?seed=foobar&results=20&nat=BR`);

      if (status > 299) {
        toast.error(data.message);

        return navigate('/');
      }
      console.log(data.results[0]);
      setListUser(data.results);
    } catch (error: any) {
      return toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='App'>
      <h1>Busque aqui as suas opções</h1>
      <div className='card'>
        <button onClick={() => fetchList()}>Buscar </button>
      </div>
      <div className='ListUser'>
      {listUser.length > 0 ? (
        listUser.map((iten: any) => {
          return (
            // <div key={iten.login.uuid}>
            // </div> 
            <UserCard key={iten.login.uuid} img={iten.picture.large} firstName={iten.name.first} lastName={iten.name.last} age={iten.dob.age}/>
            );
          })
          ) : (
            <div>
          <span>Carregando usuários...</span>
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;
