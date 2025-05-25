import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-primary-bg rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">On Thursday</h3>
          <div className="grid grid-col-1 h-52 xl:h-32 xl:grid-cols-2 gap-4">
            <SimpleAppointmentCard
              title="Health checkup complete"
              time="11:00 AM"
              icon="checkup"
            />
            <SimpleAppointmentCard
              title="Ophthalmologist"
              time="14:00 PM"
              icon="eye"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">On Saturday</h3>
          <div className="grid grid-col-1 h-52 xl:h-32 xl:grid-cols-2 gap-4">
            <SimpleAppointmentCard
              title="Cardiologist"
              time="12:00 AM"
              icon="heart"
            />
            <SimpleAppointmentCard
              title="Neurologist"
              time="16:00 PM"
              icon="brain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;