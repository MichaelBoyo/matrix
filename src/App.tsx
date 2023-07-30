import { FC } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";
const App: FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <div >
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
