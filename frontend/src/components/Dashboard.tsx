import TicketCardWidget from "./TicketCardWidget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard() {
  return (
    <>
      <h1>Tickets Dashboard</h1>

      <Container fluid>
        <Row>
          <Col>
            <h2>Open</h2>
            <TicketCardWidget status="Open" />
          </Col>
          <Col>
            <h2>In Progress</h2>
            <TicketCardWidget status="In Progress" />
          </Col>
          <Col>
            <h2>Done</h2>
            <TicketCardWidget status="Done" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
