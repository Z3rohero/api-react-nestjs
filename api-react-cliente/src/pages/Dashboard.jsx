import React from 'react';
import CreateProduct from '../components/CreateProduct';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="container mx-auto py-8">
        <CreateProduct />
      </div>
    </div>
  );
};

export default Dashboard;
