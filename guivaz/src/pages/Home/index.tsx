import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserCard from '../../components/Card';
import SimpleDialog from '../../components/Modal';
import useUser from '../../hooks/useUser';
import { User } from '../../hooks/useUserProvider';
import { get } from '../../services/functions';
import './styles.css';

function Home() {
  const { listUser, setListUser,openModal,handleModal } = useUser();

  const navigate = useNavigate();

  async function fetchList() {
    try {
      const { data, status } = await get(`/?seed=foobar&results=50&nat=BR`);

      if (status > 299) {
        toast.error(data.message);

        return navigate('/');
      }

      setListUser(data.results);
    } catch (error: any) {
      return toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='Home'>
      <h1>Damos as nossas boas vindas para a nossa página</h1>
      <p>
        Aqui está nossa listagem de usuário, clique em um para visualizar mais
        informações
      </p>
      <div className='ListUser'>
        {listUser.length > 0 ? (
          listUser.map((iten: User) => {
            return (
              <UserCard
                key={iten.login.uuid}
                img={iten.picture.large}
                firstName={iten.name.first}
                lastName={iten.name.last}
                age={iten.dob.age}
                user={iten}
              />
            );
          })
        ) : (
          <div>
            <span>Carregando usuários...</span>
          </div>
        )}
      </div>
      <SimpleDialog open={openModal} 
      onClose={handleModal}
      />
    </div>
  );
}

export default Home;
