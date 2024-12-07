import React from 'react';
import Nav from '../components/Nav';
import CreateProduct from '../components/CreateProduct';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/*<Nav /> */}
      <div className="container mx-auto py-8">

        <CreateProduct />
      </div>
    </div>
  );
};

export default Dashboard;
