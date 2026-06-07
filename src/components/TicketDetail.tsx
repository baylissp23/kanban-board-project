import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTicketStore } from "../store/useTicketStore";
import { Badge, Card } from "react-bootstrap";
import type { Ticket } from "../types";
import EditTicketModal from "./EditTicketModal";

function TicketDetail() {
  const params = useParams();
  const tickets = useTicketStore((state) => state.tickets);
  const deleteTicket = useTicketStore((state) => state.deleteTicket);

  const numericId = Number(params.id);

  const focusedTicket = tickets.find((ticket) => {
    return ticket.id === numericId;
  })!;

  const formattedTicketDate = new Date(focusedTicket.id).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  function detectStatusColor(ticket: Ticket): string {
    if (ticket.status === "Open") {
      return "primary";
    } else if (ticket.status === "In Progress") {
      return "warning";
    } else {
      return "success";
    }
  }

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Link to="/">
              <Button variant="link">← Back to Dashboard</Button>
            </Link>
            <h1>Ticket: {focusedTicket.title}</h1>
            <Badge bg={detectStatusColor(focusedTicket)}>
              {focusedTicket.status}
            </Badge>
            <Card className="shadow-sm mt-2">
              <Card.Header>Date Created: {formattedTicketDate}</Card.Header>
              <Card.Body>{focusedTicket.description}</Card.Body>
              <Card.Footer>
                <EditTicketModal ticket={focusedTicket} />
                <Link to="/">
                  <Button
                    variant="danger"
                    onClick={() => deleteTicket(focusedTicket.id)}
                  >
                    Delete Ticket
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TicketDetail;
