import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
      </Routes>
    </div>
  );
};

export default App;