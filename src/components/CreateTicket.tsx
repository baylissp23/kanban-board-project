import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useTicketStore } from "../store/useTicketStore";
import { type TicketStatus } from "../types/index";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState, useRef, useEffect } from "react";

function CreateTicket() {
  const addTicket = useTicketStore((state) => state.addTicket);
  const [showPopover, setShowPopover] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Ticket Created!</Popover.Header>
      <Popover.Body>
        Your ticket has been created. Go to the dashboard to see it...
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  return (
    <>
      <h1>Create Ticket</h1>

      <Container fluid>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const ticketData = new FormData(e.currentTarget);
            const title = ticketData.get("title") as string;
            const description = ticketData.get("description") as string;
            const status = ticketData.get("status") as TicketStatus;

            addTicket({
              id: Date.now(),
              title: title,
              description: description,
              status: status,
            });

            e.currentTarget.reset();

            setShowPopover(true);
            setTimeout(() => {
              setShowPopover(false);
            }, 2000);
          }}
        >
          <Form.Group className="mb-3" controlId="ticketTitle">
            <Form.Label>Ticket Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ticket title here..."
              name="title"
              ref={titleInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ticketDescription">
            <Form.Label>Ticket Description</Form.Label>
            <Form.Control as="textarea" rows={2} name="description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ticketStatus">
            <Form.Label>Ticket Status</Form.Label>
            <Form.Select name="status">
              <option>Open</option>
              <option>In Progress</option>
              <option>Done</option>
            </Form.Select>
          </Form.Group>
          <OverlayTrigger
            show={showPopover}
            placement="right"
            overlay={popover}
          >
            <Button variant="primary" type="submit">
              Create
            </Button>
          </OverlayTrigger>
        </Form>
      </Container>
    </>
  );
}

export default CreateTicket;
