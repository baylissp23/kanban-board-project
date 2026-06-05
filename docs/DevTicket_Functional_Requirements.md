# Functional Requirements (Features): DevTicket

## Core User Stories

### Epic 1: The Ticket Board (Dashboard)
**As a user, I want to see an overview of all my tasks so I can understand my current workload.**
* **Feature:** A main dashboard (`/`) displaying all tickets currently stored in the system.
* **Feature:** Each ticket on the board should display its ID, Title, and current Status in a summarized card or list row.
* **Feature:** (Optional/Bonus) Group or filter the tickets visually by their status ("Open", "In Progress", "Done") like a standard Kanban board.

### Epic 2: Ticket Creation
**As a user, I want to create new tickets so I can track new issues or tasks.**
* **Feature:** A UI element (a button or link) on the board that navigates to a creation form or opens a modal.
* **Feature:** The form must include inputs for:
  * `Title` (Text input, required)
  * `Description` (Text area, optional)
  * `Status` (Dropdown or radio buttons, defaults to "Open")
* **Feature:** When the form is opened, the cursor should automatically focus on the `Title` input field.
* **Feature:** Submitting the form should save the ticket to the global store and return the user to the main board.

### Epic 3: Ticket Detail View
**As a user, I want to click on a ticket to see its full details and description.**
* **Feature:** Clicking a ticket on the board should navigate the user to a dedicated URL (e.g., `/ticket/123`).
* **Feature:** The detail page should display the ticket's full Title, Description, ID, and Status.
* **Feature:** The detail page must include a "Back to Board" button or link to easily return to the main dashboard.

### Epic 4: Updating Tickets
**As a user, I want to change the status of my tickets as I work on them.**
* **Feature:** On either the Board view or the Detail view (your choice), there must be a way to change a ticket's status.
* **Feature:** For example, a dropdown menu or a set of buttons that allows transitioning a ticket from "Open" to "In Progress" to "Done".
