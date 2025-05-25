import React from 'react';
import { navbarData } from '../../data/data';

interface NavItemProps {
    icon: React.ReactNode;
    text: string;
    isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isActive = false }) => {
    return (
        <li className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200
      ${isActive
                ? 'bg-cyan-600 text-white'
                : 'text-gray-500 hover:bg-gray-100'}`}>
            <div className="mr-3">
                {icon}
            </div>
            <span className="font-medium">{text}</span>
        </li>
    );
};

const Sidebar: React.FC = () => {
    return (
        <div className="bg-primary-bg min-w-64 h-full py-6 hidden xl:flex flex-col">
            <div className="px-6 mb-8">
                <h3 className="text-xs uppercase text-gray-400 font-medium tracking-wider">General</h3>
            </div>

            <nav className="flex-1">
                <ul className="px-3">
                    {navbarData.general.map((item, i) => (
                        <NavItem key={i} icon={<item.icon size={20} />} text={item.text} isActive={item.isActive} />
                    ))}
                </ul>
            </nav>

            <div className="px-6 mb-4 mt-6">
                <h3 className="text-xs uppercase text-gray-400 font-medium tracking-wider">Tools</h3>
            </div>

            <nav className="mb-auto">
                <ul className="px-3">
                    {navbarData.tools.map((item, i) => (
                        <NavItem key={i} icon={<item.icon size={20} />} text={item.text} isActive={item.isActive} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;