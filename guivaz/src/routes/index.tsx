import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function MyRoutes() {
  return (
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Detail />} />
  </Routes>
  );
}

export default MyRoutes;



