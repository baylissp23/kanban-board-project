import { useTicketStore } from "../store/useTicketStore";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type { TicketStatus } from "../types";
import { Link } from "react-router-dom";

interface TicketCardWidgetProps {
  status: TicketStatus;
}

function TicketCardWidget({ status }: TicketCardWidgetProps) {
  const tickets = useTicketStore((state) => state.tickets);

  return (
    <>
      {tickets
        .filter((ticket) => {
          return ticket.status === status;
        })
        .map((ticket) => {
          return (
            <Card key={ticket.id} className="mb-3 shadow-sm h-30">
              <Card.Body>
                <Card.Title>{ticket.title}</Card.Title>
                <Card.Text>{ticket.description.slice(0, 49)}...</Card.Text>
                <Link to={`/ticket/${ticket.id}`}>
                  <Button variant="primary" className="me-2">
                    Expand Ticket
                  </Button>
                </Link>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}

export default TicketCardWidget;
