export type TicketStatus =
  | "open"
  | "in progress"
  | "done"

export interface Ticket {
    id : number;
    title: string;
    description: string;
    status: TicketStatus;
}