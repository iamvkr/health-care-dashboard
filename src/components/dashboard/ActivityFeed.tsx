import React from 'react';

const ActivityFeed: React.FC = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  
  // Generate random heights for bar chart
  const generateBarData = () => {
    return days.map(day => {
      // For each day, create 1-3 bars of different heights and colors
      const bars = [];
      const numBars = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < numBars; i++) {
        const height = Math.floor(Math.random() * 70) + 10; // 10-80px height
        
        // Random color from a medical palette
        const colors = [
          'bg-cyan-400', 'bg-blue-500', 'bg-indigo-500', 
          'bg-teal-400', 'bg-green-400'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        bars.push({ height, color });
      }
      
      return { day, bars };
    });
  };
  
  const barData = generateBarData();

  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Activity</h2>
        <span className="text-sm text-gray-600 font-medium">3 appointment on this week</span>
      </div>
      
      {/* Bar chart */}
      <div className="flex items-end justify-between h-36 px-2">
        {barData.map((data, index) => (
          <div key={index} className="flex items-end space-x-1 ">
            {data.bars.map((bar, barIndex) => (
              <div 
                key={barIndex}
                className={`w-4 ${bar.color} rounded-t-md`}
                style={{ height: `${bar.height}px` }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      
      {/* X-axis labels */}
      <div className="flex justify-between mt-2 px-2">
        {days.map((day, index) => (
          <div key={index} className="text-xs text-gray-500 font-medium">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;