# 📱 MVP Prototyping & Testing

This document outlines the early prototyping, user testing, and iterative design cycles that shaped the **UQ-Connect** Minimum Viable Product (MVP). It documents the evidence of early prototype testing and how user feedback directly drove our technical and feature-level design decisions.

---

## Part 1: Prototyping & Early Testing Evidence

To validate the value propositions of UQ-Connect, our team developed and tested two types of prototypes:
1. **Paper/Wireframe Sketches:** Used to test initial layout ideas, navigation structures, and the basic 3-pillar concept.
2. **Interactive HTML/Tailwind Digital Prototype:** A high-fidelity, interactive sketch of the app running inside a phone frame (`prototype/ui-ux/uq-connect.html`). It features a functional **Live Discovery Feed**, a searchable **Clubs Directory** with details modals, an **Open Socials** creation form, and a **Pathfinder Hub** booking screen.

### 👥 Early MVP Testing & Feedback Sessions
We conducted testing sessions with students representing our core customer segments (socially anxious, international, and exploratory new students) and club executives. During these sessions, participants interacted with the digital prototype and performed tasks like *"Find a social activity starting in the next hour"*, *"Explore a new club and check pricing"*, and *"Set up a real-world event as a club exec."*

Key feedback collected from participants (e.g., Kenny, Max, Asani, Abby):
*   **The "Formal Consultation" Fear:** Socially anxious students felt that booking a formal "1-on-1 consultation" felt like a job interview or a gatekeeping step. They wanted something casual.
*   **Need for Visual/Social Proof:** When browsing clubs, students noted that static descriptions weren't enough. They wanted to see the "vibe" and what the club actually does (e.g., memories, pictures, highlights).
*   **Discovery Friction:** In-person Market Day was described as overwhelming, making it hard to find niche clubs. An online list was deemed too static; students preferred filtering by category or scrolling through active socials.
*   **Migration Hesitancy:** Students were worried about moving active club chats off Discord or Messenger to a new app due to notification fatigue.
*   **Exec Redundancy:** Club executives stated that posting events on a new app would feel like extra work unless it cross-posted to Facebook or integrated with their existing workflows.
*   **Operational Gaps:** Club execs noted the event creation form lacked essential logistical controls like attendee limits, equipment requirements, and weather notes.

---

## Part 2: Connection between Prototype Feedback & MVP Feature Decisions

The table below outlines how specific prototype testing feedback directly informed our final MVP design choices:

| Prototype Feedback Received | MVP Feature Decision / Iteration | Implementation in `uq-connect.html` |
| :--- | :--- | :--- |
| **"Booking a 1-on-1 consultation feels too formal and intimidating."** | Redesigned the *Consultation Hub* into the **Pathfinder Hub**. Replaced formal language with casual "Book Chat" buttons and styled it as a casual coffee chat with a senior peer mentor. | **Pathfinder Hub:** Displays peer mentors (e.g., Reino, Sacha) with their specialties (e.g., CS & Tennis) and a simple, low-stakes chat trigger. |
| **"Static club pages are boring. I want to see what they actually do before joining."** | Added a mandatory **Memories & Highlights** text field in the club profile to act as social proof in lieu of high-bandwidth image databases. | **Clubs Directory Modal:** Selecting a club displays a "Memories & Highlights" box showing past event achievements (e.g., *"Cupcake Night: Distributed 200 free cakes"*). |
| **"If I search for a club, I need to know what's there first. I prefer scrolling categories."** | Implemented **Category Tabs** (Academic vs. Non-Academic) and subcategory chips (Sport, Art, Hobby, Tech) alongside the search bar. | **Clubs Search page:** Features category tabs and horizontal scrollable filter chips to enable easy, discovery-based browsing. |
| **"I'm scared of joining social sports because I'm not good enough and don't want to get embarrassed."** | Enforced a **Mandatory Skill-Tier Tag** (Newbie, Hobbyist, Pro) during the Open Social creation flow, displayed prominently on all activity cards. | **Open Social Form:** Enforces a skill-tier selection. The Live Feed highlights the level (e.g., *"Tier: Newbie"* in green) to establish psychological safety. |
| **"If a club moves its chats to UQ Connect, I'll miss messages because I have too many apps."** | Decided that UQ-Connect will act as an **Event Gateway** rather than a chat replacement. Clubs can display their active Discord/Messenger links on their profile page. | **Clubs Profile Modal:** Displays direct social links (Instagram, Discord) so students can transition easily to the club's primary active chat channels. |
| **"Posting here instead of Facebook is extra work for our marketing team."** | Recommended integrating **Calendar Export** (Google Calendar/iCal) and social cross-posting APIs in the admin panel specifications. | **Admin Workflow:** Planned integrations to ensure that publishing an activity in UQ-Connect syncs with external club pages. |
| **"The activity host form is missing logistical settings like attendee limits and gear info."** | Added **Equipment Needed**, **Attendee Caps**, and **Conditions/Notes** to the event creation form. | **Open Social Form:** Includes text fields for equipment lists, price per person, and general conditions/notes. |
