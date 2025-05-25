import React from 'react';
import { HealthStatusCardData } from '../../data/data';

interface HealthStatusCardProps {
    title: string;
    date: string;
    status: 'good' | 'warning' | 'critical';
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({ title, date, status }) => {

    const getIcon = () => {
        if (title === "Lungs") {
            return (
                <div className="rounded-full p-2 bg-red-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L9 7L12 9.5L15 7L12 2Z" fill="#FF6B6B" />
                        <path d="M9 7V17C9 19.2091 7.20914 21 5 21H4V17C4 14.7909 5.79086 13 8 13H9" fill="#FF6B6B" />
                        <path d="M15 7V17C15 19.2091 16.7909 21 19 21H20V17C20 14.7909 18.2091 13 16 13H15" fill="#FF6B6B" />
                    </svg>
                </div>
            );
        } else if (title === "Teeth") {
            return (
                <div className="rounded-full p-2 bg-blue-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C7.58172 2 4 5.58172 4 10V18C4 19.1046 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V16H14V18C14 19.1046 14.8954 20 16 20H18C19.1046 20 20 19.1046 20 18V10C20 5.58172 16.4183 2 12 2Z" fill="#60A5FA" />
                    </svg>
                </div>
            );
        } else {
            return (
                <div className="rounded-full p-2 bg-gray-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4C7.34315 4 6 5.34315 6 7C6 7.74592 6.29546 8.42101 6.78 8.92L6 14C6 15.1046 6.89543 16 8 16H9L9.78 17.38C10.5446 18.5032 12.0998 18.6699 13.0805 17.7396L17.78 13.42C18.2646 12.9799 18.5547 12.3678 18.5547 11.7279C18.5547 11.088 18.2646 10.4759 17.78 10.0358L15.28 7.73577C14.7954 7.29565 14.1447 7.04102 13.4653 7.04102C12.7858 7.04102 12.1351 7.29565 11.6505 7.73577L10.22 9.02L9.22 8.02C9.71 7.52 10 6.85 10 6C10 4.89543 9.10457 4 8 4H9Z" fill="#9CA3AF" />
                    </svg>
                </div>
            );
        }
    };

    return (
        <div className="mb-6 flex flex-col items-center bg-primary-bg py-4 rounded-xl">
            <div className="icon_text flex items-center">
                {getIcon()}
                <h3 className="font-medium text-gray-800">{title}</h3>
            </div>
            <div className='mb-1'>
                <span className="text-xs text-gray-500">{date}</span>
            </div>
            <div className={`h-2 w-3/4 rounded-full bg-[#e0e3ee] `}>
                <div className={`h-2 w-3/4 rounded-full ${status === 'good' ? "bg-cyan-500" : (status === "warning" ? "bg-orange-500" : "bg-red-500")} `}></div>
            </div>
        </div>
    );
};

const HealthStatusCards: React.FC = () => {
    return (
        <div className="p-4 bg-white">
            {HealthStatusCardData.map((item) => (
                <HealthStatusCard
                    title={item.title}
                    date={item.date}
                    status={item.status}
                />
            ))}
        </div>
    );
};

export default HealthStatusCards;