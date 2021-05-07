import logo from './logo.svg';
import './App.css';
import WeeklyView from './components/weeklyview/WeeklyView';
import DailyView from './components/DailyView';

function App() {
  return (
    <div className="App">
      <WeeklyView />
      <DailyView/>
    </div>
  );
}

export default App;
