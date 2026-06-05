import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTicket from "./components/CreateTicket";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<CreateTicket />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
