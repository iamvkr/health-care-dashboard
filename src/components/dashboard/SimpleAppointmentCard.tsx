import React from 'react';
import { Eye, Heart, Brain, Thermometer } from 'lucide-react';

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: 'checkup' | 'eye' | 'heart' | 'brain';
}

const SimpleAppointmentCard: React.FC<AppointmentCardProps> = ({ title, time, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'checkup':
        return <Thermometer className="w-5 h-5 text-red-500" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-blue-500" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-red-500" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary-light rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <div className="rounded-full p-2 bg-white">
        {getIcon()}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;