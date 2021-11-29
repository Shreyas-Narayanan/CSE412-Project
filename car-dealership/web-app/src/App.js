import './App.css';
import React from 'react';
import CarsTable from './Components/Car_Information/CarsTable';
import CustomerTable from './Components/Customer_Information/CustomerTable';
import MaintenanceTable from './Components/Maintenance_Report/MaintenanceTable';
import SalesTable from './Components/Sales_Report/SalesTable';
import ManTable from './Components/Salesman_Information/ManTable';
import MechTable from './Components/Mechanic_Information/MechTable';

function App() {
  return (
    <div className = "container">
      <CarsTable/>
      <CustomerTable/>
      <ManTable/>
      <MechTable/>
      <SalesTable/>
      <MaintenanceTable/>
    </div>
  );
}

export default App;
