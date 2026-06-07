import type { TicketStatus, Ticket } from "../types/index";
import { create } from "zustand";

interface TicketStoreState {
  tickets : Ticket[];
  addTicket : (ticket : Ticket) => void;
  updateTicket : (id : number, newStatus : TicketStatus, newTitle : string, newDesc : string) => void;
}

export const useTicketStore = create<TicketStoreState>()((set) => ({
  tickets : [
    {
      id: 1,
      title: "Example Task 1",
      description: "Example task description.",
      status: "Done"
    },
    {
      id: 2,
      title: "Example Task 2",
      description: "Example task description. testtesttesttesttesttest",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Example Task 3",
      description: "Example task description.",
      status: "Open"
    },
    {
      id: 4,
      title: "Example Task 4",
      description: "Example task description.",
      status: "In Progress"
    },
  ],
  addTicket : (ticket) => {
    set((state) => ({
      tickets: [...state.tickets, ticket]
    }))
  },
  updateTicket : (id, newStatus, newTitle, newDesc) => {
    set((state) => {
      const updateTickets = state.tickets.map((ticket) => {
        if (ticket.id === id) {
            return { ...ticket, title: newTitle, description: newDesc, status: newStatus };
        }
        return ticket;
      })
      return { tickets: updateTickets }
    })
  },
}));