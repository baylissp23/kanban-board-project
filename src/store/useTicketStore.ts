import type { TicketStatus, Ticket } from "../types/index";
import { create } from "zustand";

interface TicketStoreState {
  tickets : Ticket[];
  addTicket : (ticket : Ticket) => void;
  updateTicketStatus : (id : number, newStatus : TicketStatus) => void;
}

export const useTicketStore = create<TicketStoreState>()((set) => ({
  tickets : [],
  addTicket : (ticket) => {
    set((state) => ({
      tickets: [...state.tickets, ticket]
    }))
  },
  updateTicketStatus : (id, newStatus) => {
    set((state) => {
      const updateTickets = state.tickets.map((ticket) => {
        if (ticket.id === id) {
            return { ...ticket, status: newStatus };
        }
        return ticket;
      })
      return { tickets: updateTickets }
    })
  },
}));