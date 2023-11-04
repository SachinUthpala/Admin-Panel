import './App.css';
import EventManagement from './Components/EventManagement/EventManagement';
import MainDash from './Components/MainDash/MainDash';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      
      <div className="appGlass">
        <SideBar/>
        <MainDash/>
        <EventManagement/>
      </div>

    </div>
  );
}

export default App;
