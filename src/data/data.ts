import {
    LayoutDashboard,
    History,
    Calendar,
    CalendarCheck,
    BarChart2,
    Clipboard,
    MessageSquare,
    HelpCircle,
    Settings
} from 'lucide-react';

export const navbarData = {
    general: [
        {
            text: "Dashboard",
            icon: LayoutDashboard,
            link: "#",
            isActive: true
        },
        {
            text: "History",
            icon: History,
            link: "#",
            isActive: false
        },
        {
            text: "Calendar",
            icon: Calendar,
            link: "#",
            isActive: false
        },
        {
            text: "Appointments",
            icon: CalendarCheck,
            link: "#",
            isActive: false
        },
        {
            text: "Statistics",
            icon: BarChart2,
            link: "#",
            isActive: false
        },
        {
            text: "Tests",
            icon: Clipboard,
            link: "#",
            isActive: false
        },
    ],
    tools: [
        {
            text: "Chat",
            icon: MessageSquare,
            link: "#",
            isActive: false
        },
        {
            text: "Support",
            icon: HelpCircle,
            link: "#",
            isActive: false
        },
        {
            text: "Setting",
            icon: Settings,
            link: "#",
            isActive: false
        },
    ]
}

export const HealthStatusCardData: {
    title: string,
    date: string,
    status: 'good' | 'warning' | 'critical'
}[]
    = [
        {
            title: "Lungs",
            date: "Date: 24 Oct 2021",
            status: "critical"
        },
        {
            title: "Teeth",
            date: "Date: 24 Oct 2021",
            status: "good"
        },
        {
            title: "Bone",
            date: "Date: 24 Oct 2021",
            status: "warning"
        },
    ]