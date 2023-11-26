import './App.css';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import LeagueTable from './components/leagueTable/LeagueTable';

import StatisticsSection from './components/Statistics/StatisticsSection';

const App = () => {
  return (
    <div className="app-container">
      <h1>Select a Year</h1>
      <DropDownMenu />
      <LeagueTable />
      <StatisticsSection />
    </div>
  );
};

export default App;
