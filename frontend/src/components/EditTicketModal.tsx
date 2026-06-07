import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import type { Ticket, TicketStatus } from "../types";
import { Button } from "react-bootstrap";
import { useTicketStore } from "../store/useTicketStore";

interface EditTicketModalProps {
  ticket: Ticket;
}

function EditTicketModal({ ticket }: EditTicketModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateTicket = useTicketStore((state) => state.updateTicket);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Ticket
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="updateTicketForm"
            onSubmit={(e) => {
              e.preventDefault();
              const ticketData = new FormData(e.currentTarget);
              const title = ticketData.get("title") as string;
              const description = ticketData.get("description") as string;
              const status = ticketData.get("status") as TicketStatus;

              updateTicket(ticket.id, status, title, description);
            }}
          >
            <Form.Group className="mb-3" controlId="ticketTitle">
              <Form.Label>Ticket Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={ticket.title}
                name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ticketDescription">
              <Form.Label>Ticket Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                defaultValue={ticket.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ticketStatus">
              <Form.Label>Ticket Status</Form.Label>
              <Form.Select name="status" defaultValue={ticket.status}>
                <option>Open</option>
                <option>In Progress</option>
                <option>Done</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            form="updateTicketForm"
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTicketModal;
