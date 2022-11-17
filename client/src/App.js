import './App.css';
import LoginPages from './Pages/LoginPages';
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage';
import RegisterComp from './Components/RegisterComp';
import PendaftaranSarana from './Components/PendaftaranSarana';
import DashboardPage from './Pages/DashboardPage';
import PartialPage from './Pages/PartialPage';
import SalesPage from './Pages/SalesPage';
import InventoryPage from './Pages/InventoryPage';
import PurchasePage from './Pages/PurchasePage';
import UserManagement from './Pages/UserManagement';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/login'} element={<LoginPages />} />
        <Route path={'/register'} element={<RegisterPage />} >
          <Route path={'/register'} element={<PendaftaranSarana />} />
          <Route path={'/register/next'} element={<RegisterComp />} />
        </Route>
        <Route path={'/'} element={<PartialPage />} >
          <Route path={'/'} element={<DashboardPage />} />
          <Route path={'/sales'} element={<SalesPage/>} />
          <Route path={'/inventory'} element={<InventoryPage/>}/>
          <Route path={'/purchase'} element={<PurchasePage/>} />
          <Route path={'/user'} element={<UserManagement/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
