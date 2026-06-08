import type { TicketStatus, Ticket } from "../../../shared/types.ts";
import { create } from "zustand";

const API_URL = "http://localhost:3000/api/tickets";

interface TicketStoreState {
  tickets : Ticket[];
  fetchTickets: () => Promise<void>;
  addTicket : (ticketData : Omit<Ticket, "_id">) => Promise<void>;
  updateTicket : (id : string, newStatus : TicketStatus, newTitle : string, newDesc : string) => void;
  deleteTicket : (id : string) => Promise<void>;
}

export const useTicketStore = create<TicketStoreState>()((set) => ({
  tickets : [],

  fetchTickets : async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      set({ tickets: data });
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    }
  },

  addTicket : async (ticketData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });
      const newTicket = await response.json();

      set((state) => ({
        tickets : [...state.tickets, newTicket],
      }))
    } catch (err) {
      console.error("Failed to add ticket:", err);
    }
  },
  updateTicket : async (id, newStatus, newTitle, newDesc) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, title: newTitle, description: newDesc }),
      });
      const updatedTicket = await response.json();

      set((state) => ({
        tickets: state.tickets.map((ticket) => (ticket._id === id ? updatedTicket : ticket)),
      }));
    } catch (err) {
      console.error("Failed to update ticket:", err);
    }
  },
  deleteTicket : async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      set((state) => ({
        tickets: state.tickets.filter((ticket) => ticket._id !== id),
      }));
    } catch (err) {
      console.error("Failed to delete ticket: ", err);
    }
  }
}));