export type TicketStatus =
    | "Open"
    | "In Progress"
    | "Done"

export interface Ticket {
    _id : string;
    title: string;
    description: string;
    status: TicketStatus;
}