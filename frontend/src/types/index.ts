export type TicketStatus =
  | "Open"
  | "In Progress"
  | "Done"

export interface Ticket {
    id : number;
    title: string;
    description: string;
    status: TicketStatus;
}