# Product Requirements Document (PRD): DevTicket

## Overview
**DevTicket** is a lightweight, Kanban-style issue tracking application (similar to Jira or GitHub Issues) built with React and TypeScript. 

## Core Requirements

### Requirement 1: Global State Management (Zustand)
You must implement a global store to hold your tickets.
* **Ticket Data Model:** * `id` (string or number)
  * `title` (string)
  * `description` (string)
  * `status` (string: "Open", "In Progress", or "Done")
* **Store Actions:**
  * `addTicket(ticket)`: Adds a new ticket to the store.
  * `updateTicketStatus(id, newStatus)`: Updates the status of an existing ticket.

### Requirement 2: Multi-Page Routing (React Router)
The application must have at least two main routes:
* `/` **(The Board):** Displays all tickets, ideally organized by their current status.
* `/ticket/:id` **(The Detail View):** A dynamic route that reads the ticket ID from the URL, finds that ticket in the Zustand store, and displays its full description and details.

### Requirement 3: Complex Form State (Custom Hook + useReducer)
To add a new ticket, you need to build a form interface.
* **Custom Hook:** Build a custom hook (e.g., `useTicketForm`) that uses `useReducer` internally.
* **State to Manage:** The draft state of the new ticket (handling the title input, description textarea, and initial status).

### Requirement 4: Direct DOM Access (useRef)
* Implement a "Create New Ticket" action (this could open a form modal or navigate to a `/new` route).
* **Auto-focus:** Use a `useRef` hook to automatically focus the "Title" input field so the user can start typing immediately upon opening the form.

### Requirement 5: Strict TypeScript
* Absolutely no `any` types allowed. 
* Everything must be strictly typed using `interface` or `type` (e.g., Ticket shapes, Props, Event Handlers, Reducer Actions).
