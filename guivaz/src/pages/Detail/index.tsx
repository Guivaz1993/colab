import { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from '../../services/functions';

function Detail() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Fornecedor 1',
      state: 'SP',
      minimumLimit: 20000,
      cost: 102,
      userSupplier: [
        {
          rating: 8,
          isActive: true,
        },
      ],
      _count: {
        userSupplier: 1,
      },
      avg: 8,
      activeUser: 1,
    },
  ]);
  const navigate = useNavigate();

  async function fetchList() {
    try {
      const { data, status } = await get(`/supplier?value=${value}`);

      if (status > 299) {
        toast.error(data.message);

        return navigate('/');
      }
      setValue("")
      setList(data);
    } catch (error:any) {
      return toast.error(error.message)
    }
  }

  useEffect(() => {}, []);

  return (
    <div className='App'>
      <h1>Busque aqui as suas opções</h1>
      <input
        type='number'
        name='value'
        id='value'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='card'>
        <button onClick={() => fetchList()}>Buscar </button>
      </div>
      {list.map((iten) => {
        return <h6 key={iten.id}>{iten.name}</h6>;
      })}
    </div>
  );
}

export default Detail;