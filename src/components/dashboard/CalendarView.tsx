import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AppointmentCardProps {
    title: string;
    time: string;
    doctor: string;
    icon: React.ReactNode;
    color: string;
    textColor: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ title, time, doctor, icon, color, textColor }) => {
    return (
        <div className={`${color} p-4 rounded-xl ${textColor} flex flex-col space-y-2`}>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">{title}</h3>
                {icon}
            </div>
            <div className="text-sm opacity-90">{time}</div>
            <div className="text-sm opacity-90">{doctor}</div>
        </div>
    );
};

const CalendarView: React.FC = () => {
    const currentMonth = "October 2021";

    const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    const days = [
        { day: 25, appointments: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }] },
        { day: 26, isToday: true, appointments: [{ time: "08:00" }, { time: "09:00", highlight: true }, { time: "10:00" }] },
        { day: 27, appointments: [{ time: "12:00" }, { time: "13:00" }] },
        { day: 28, appointments: [{ time: "10:00" }, { time: "11:00", highlight: true }] },
        { day: 29, appointments: [{ time: "14:00" }, { time: "16:00" }] },
        { day: 30, appointments: [{ time: "12:00", highlight: true }, { time: "14:00" }, { time: "15:00" }] },
        { day: 31, appointments: [{ time: "09:00", highlight: true }, { time: "10:00" }, { time: "11:00" }] }
    ];

    return (
        <div className="bg-primary-bg rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                    <h2 className="font-semibold text-lg">{currentMonth}</h2>
                </div>

                <div className="flex space-x-2">
                    <button className="p-1 rounded bg-gray-100">
                        <ChevronLeft size={18} className="text-gray-600" />
                    </button>
                    <button className="p-1 rounded bg-gray-100">
                        <ChevronRight size={18} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Calendar */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
                {/* Days of week */}
                <div className="grid grid-cols-7 bg-gray-50">
                    {weekDays.map((day, index) => (
                        <div key={index} className={`text-center py-2 text-sm font-medium flex flex-col text-primary rounded-t-xl ${days[index].isToday && "bg-primary-light"}`}>
                            <span>{day}</span>
                            <span className='text-xl font-bold '>{days[index].day}</span>
                        </div>
                    ))}

                    {days.map((item, index) => (
                        <div key={index} className={`text-center py-2 text-sm font-medium flex flex-col text-gray-600 rounded-b-xl ${item.isToday && "bg-primary-light px-2"}`}>
                            {item.appointments.map((apm, i) => (
                                <span key={i} className={`text-xs h-10 flex items-center justify-center rounded-xl
                                    ${apm.highlight
                                    &&
                                    (item.isToday ? "bg-primary text-white "
                                        :
                                        "bg-primary-light text-black"
                                    )
                                    }`}>{apm.time}</span>
                            ))}
                        </div>
                    ))}


                </div>

            </div>

            {/* Appointment cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <AppointmentCard
                    title="Dentist"
                    time="09:00-11:00"
                    doctor="Dr. Cameron Williamson"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2C7.58172 2 4 5.58172 4 10V18C4 19.1046 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V16H14V18C14 19.1046 14.8954 20 16 20H18C19.1046 20 20 19.1046 20 18V10C20 5.58172 16.4183 2 12 2Z" />
                        </svg>
                    }
                    color="bg-primary"
                    textColor="text-white"
                />

                <AppointmentCard
                    title="Physiotherapy Appointment"
                    time="11:00-12:00"
                    doctor="Dr. Kevin Dymes"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 20l-4-4m-4 4l4-4" />
                            <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                            <circle cx="16" cy="8" r="2" />
                            <path d="M18 6l2 2l-1.5 1.5" />
                        </svg>
                    }
                    color="bg-primary-light"
                    textColor="text-black"
                />
            </div>
        </div>
    );
};

export default CalendarView;