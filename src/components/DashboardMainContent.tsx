import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

const DashboardMainContent: React.FC = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-4">
            {/* Left side */}
            <div className="flex flex-col xl:p-6 overflow-y-auto">
                {/* title */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <h1 className="text-sm font-medium px-3 py-1 rounded bg-blue-50 text-cyan-600">This Week</h1>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-primary-bg rounded-lg shadow-sm">
                        <AnatomySection />
                    </div>
                    <div className="bg-primary-bg rounded-lg shadow-sm">
                        <HealthStatusCards />
                    </div>
                    <div style={{ gridColumnEnd: "span 2", overflow:"auto" }}>
                        <ActivityFeed />
                    </div>
                </div>
            </div>

            {/* right side */}
            <div>
                <CalendarView />
                <UpcomingSchedule />
            </div>
        </div>
    );
};

export default DashboardMainContent;