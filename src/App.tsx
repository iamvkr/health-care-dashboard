import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;