import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTicket from "./components/CreateTicket";
import Navigation from "./components/Navigation";
import TicketDetail from "./components/TicketDetail";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Navigation />

      <Container fluid>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<CreateTicket />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
