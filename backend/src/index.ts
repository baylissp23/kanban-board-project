import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { TicketModel } from "./models/Ticket.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const mongoURI = process.env.MONGO_URI as string;

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/api/tickets", async (req, res) => {
    try {
        const tickets = await TicketModel.find({});
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message : "Failed to fetch tickets" });
    }
});

app.post("/api/tickets", async (req, res) => {
   try {
       const ticketData = req.body;
       const newTicket = await TicketModel.create(ticketData);

       res.status(201).json(newTicket);
   } catch (err) {
       console.error(err);
       res.status(400).json({ message: "Failed to create ticket" });
   }
});

app.put("/api/tickets/:id", async (req, res) => {
   try {
       const ticketId = req.params.id;
       const updatedData = req.body;

       const updatedTicket = await TicketModel.findByIdAndUpdate(ticketId, updatedData, { new: true });
       res.json(updatedTicket);
   } catch (err) {
       res.status(400).json({ message: "Failed to update ticket" });
   }
});

app.delete("/api/tickets/:id", async (req, res) => {
   try {
       const ticketId = req.params.id;

       await TicketModel.findByIdAndDelete(ticketId);
       res.json({message: "Ticket successfully deleted."});
   } catch (err) {
       res.status(500).json({ message: "Failed to delete ticket" });
   }
});

app.listen(port, () => {
    console.log(`Hello, port ${port}!`);
});