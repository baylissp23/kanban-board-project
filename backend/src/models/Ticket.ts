import mongoose, { Schema, Document } from "mongoose";
import { type Ticket } from "../../../shared/types.js";

const TicketSchema = new Schema<Ticket>({
   title: { type: String, required: true },
   description: { type: String, required: false },
   status: {
       type: String,
       required: true,
       enum: ['Open', 'In Progress', 'Done'],
       default: 'Open'
   }
}, { timestamps: true });

export const TicketModel = mongoose.model<Ticket>("Ticket", TicketSchema);