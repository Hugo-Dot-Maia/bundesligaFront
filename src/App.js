import './App.css';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import mockData from './mock/seasonResult.json';
import LeagueTable from './components/leagueTable/LeagueTable';


const App = () => {
  return (
    <div className="app-container">
      <h1>Select a Year</h1>
      <DropDownMenu />
      <LeagueTable data={mockData} />
    </div>
  );
};

export default App;
