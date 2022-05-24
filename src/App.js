import "./App.css";
import { Dashboard } from "./components/dashboard/dashboard";
import { ActivityCard } from "./components/card/activityCard";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <ActivityCard label="Acivity" />
    </div>
  );
}

export default App;
