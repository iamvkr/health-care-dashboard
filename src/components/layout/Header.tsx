import React from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between pe-4">
        {/* App Logo/Title (Healthcare.) */}
      <div className="flex items-center xl:min-w-64 p-4 xl:bg-primary-bg">
        <Menu className='me-2 xl:hidden'/>
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>

      {/* Search Bar Notification Icon. */}
      <div className="hidden xl:flex w-full ps-6">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Bell className="w-5 h-5" color='#3835aa' fill='#3835aa' />
          </div>
        </div>
      </div>

      {/* User Profile "Add" Button */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="User"
            className="w-8 h-8 rounded-lg object-cover"
          />
        </div>
        <button className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;