# 🏗️ MVP Feature Architecture & Hypotheses

**Project:** UQ-Connect - Live Student Engagement Platform  
**Version:** Iteration 3 (Final MVP Specification)

---

## Part 1: Feature Architecture & MVP Justification

### Features Implementing Value Propositions

#### 1. Live Discovery Feed
*   **Purpose:** Implements Activity-First Discovery.
*   **What it does:** Bypasses club membership hurdles by showing what is happening now across campus.
*   **Key Elements:**
    *   Real-time event feed filtered by current time (Now → Next 24 hours).
    *   Displays: Activity name, location (UQ Maps integration), start time, skill tier, host info.
    *   Chronological ordering (what's happening closest to now appears first).

#### 2. Skill-Tiered "Open Socials"
*   **Purpose:** Implements Tiered Skill-Matching.
*   **What it does:** Uses "Newbie/Hobbyist/Competitive" tags to remove the fear of inadequacy.
*   **Key Elements:**
    *   Every "Open Social" must have a mandatory skill tier tag.
    *   Students can filter by skill level to find activities that match their comfort zone.
    *   Establishes psychological safety by ensuring students meet peers at similar skill levels.

#### 3. Pathfinder Booking
*   **Purpose:** Implements 1-on-1 Peer Mentoring.
*   **What it does:** Connects anxious students with trained senior mentors for a low-stakes "Book Chat" coffee session.
*   **Key Elements:**
    *   Quick access "Book Chat" button on every mentor's profile.
    *   Provides a friendly peer bio and specialties (e.g. CS & Tennis) to build rapport.
    *   Integrates pre-written icebreaker prompts to reduce communication anxiety.

#### 4. Clubs Directory
*   **Purpose:** Implements Club Discovery & Information Hub.
*   **What it does:** Provides a searchable, categorized directory of all UQ clubs with transparent pricing and social proof.
*   **Key Elements:**
    *   Browse all 220+ UQ clubs with search and main categories (Academic/Non-Academic).
    *   Sub-category chips (Sport, Art, Hobby, Tech) and pricing filters.
    *   Club profile modals showing pricing, socials (Instagram, Discord), and **"Memories & Highlights"** of past achievements (e.g., HackRes metrics, O-Week attendance) to act as social proof.

---

### Application Flow
```
Entry
  ↓
User opens app; no mandatory "Join Club" step
  ↓
Discovery (Choose Path)
  ├─ Path A: Browse Live Feed (What's Happening Now)
  │   ↓
  │   User scrolls real-time activities filtered by current time
  │   ↓
  │   Select an "Open Social"
  │
  └─ Path B: Browse Clubs Directory (Who Are They + What Do They Offer)
      ↓
      User searches/filters all 220+ UQ clubs
      ↓
      Select a club to view details (description, price, socials, memories)
  
  ↓
Decision
  ↓
User checks the "Skill Tier" tag (for Open Socials) or membership info (for clubs)
  ↓
Action
  ↓
User clicks "I'm Going" (Open Social) / "Join Now" (Club) OR "Book Chat" (Pathfinder) if too anxious
```

---

### Minimum Viable Product (MVP) Justification

#### Features Included (Core MVP)
*   **Live Discovery Feed** — Activity-first discovery engine.
*   **Skill-Tiered Open Socials** — Safe social matching with skill transparency.
*   **Pathfinder Booking** — 1-on-1 peer mentoring with low-stakes chats.
*   **Clubs Directory** — Searchable profiles with pricing transparency and memories.

#### Features Excluded (Future Iterations)
*   In-app messaging/social forums (using Discord/Messenger integrations instead).
*   Profile customization & gamification.
*   Event reviews/ratings.
*   Timetable integrations (using manual gap-hour entry).

**Rationale:** These four features are the absolute minimum because they directly address the psychological and informational barriers identified in our thematic analysis:
1.  **Social Anxiety:** Skill tiers remove fear of inadequacy; Pathfinder chats provide low-stakes peer support.
2.  **Information Fragmentation:** Live feed solves immediate engagement; directory solves long-term club profile discovery.
3.  **Isolation:** Pathfinder network serves as the human bridge to first activities.
4.  **Decision-Making Friction:** Detailed profiles with pricing transparency and memories reduce hesitation to join.

---

## Part 2: Refined MVP Hypotheses (Test Cards)

### Hypothesis 1: The Skill-Gap Barrier (Open Socials)
*   **What We Believed:** Socially anxious students are 50% more likely to attend a peer-hosted activity if they are guaranteed that participants are at their exact skill level (e.g., Beginner/Newbie) to ensure psychological safety.
*   **Test Design:** Conduct an A/B test of mockups:
    *   *Mockup A:* Generic event card ("Tennis Social")
    *   *Mockup B:* Same event card with a prominent "Tier: Newbie" tag
    *   Ask 10 socially anxious students which event they would feel comfortable attending alone.
*   **Success Metric:** We are right if at least 7 out of 10 students (70%) choose Mockup B.

### Hypothesis 2: Immediacy vs. Static Directory (Live Feed)
*   **What We Believed:** Students looking for immediate, spontaneous social engagement prefer a real-time, chronological "What's on Now" feed over searching a static club directory.
*   **Test Design:** Ask 10 students to perform the task: *"Find a social activity you can join within the next hour"* using a static directory layout vs. our chronological Live Feed mockup.
*   **Success Metric:** We are right if the chronological Live Feed is selected as the preferred and fastest discovery method by at least 80% of participants.

### Hypothesis 3: The Onboarding Support Bridge (Pathfinder Booking - Refuted/Pivoted)
*   **What We Believed:** Socially anxious students will book formal 1-on-1 onboarding consultations with club executives or representatives through the app to build confidence before attending events.
*   **Test Design:** Offer participants a mockup of a club detail page featuring a prominent button: *"Book 15-Minute Onboarding Consultation."*
*   **Success Metric:** We are right if at least 55% of the interviewed students say they would realistically book a session before showing up to an event. (Refuted/Pivoted to casual "Book Chat").

### Hypothesis 4: Vibe & Price Transparency (Clubs Directory)
*   **What We Believed:** Students hesitate to join clubs because they lack insights into their culture/vibe and feel membership pricing is opaque; displaying price upfront and past event "Memories" will increase registration intent.
*   **Test Design:** Show participants Version A (general description) and Version B (description, membership price, and a "Memories & Highlights" section).
*   **Success Metric:** We are right if more than 75% of students report that price transparency and historical memories in Version B increase their trust and likelihood to click "Join Now."

### Hypothesis 5: Actual Pathfinder Engagement
*   **What We Believed:** Reframing the Pathfinder feature as a casual peer booking will lead to actual usage (students sending messages when anxious) rather than being viewed as a purely hypothetical feature they would never use.
*   **Test Design:** Present the interactive prototype's Pathfinder Hub to students and ask: *"After trying the Pathfinder feature in UQ Connect, did you feel like you'd actually send a message to a senior member, or did it feel more like something you might use one day but probably wouldn't?"*
*   **Success Metric:** We are right if at least 60% of anxious students express a clear, immediate intent to send a message when facing a real event they want to attend.

### Hypothesis 6: Platform Migration Hesitancy
*   **What We Believed:** If a club decides to move all activity updates and chats to UQ Connect, students' primary source of hesitancy will be notification fatigue and the friction of checking a new app.
*   **Test Design:** Ask students: *"If your club's committee announced tomorrow that all activity updates and chats were moving to UQ Connect, what's the first thing that would make you hesitant?"*
*   **Success Metric:** We are right if more than 70% of students express concern about notification reliability and the inconvenience of adding another daily communication channel.

### Hypothesis 7: Club Executive Workload & Adoption
*   **What We Believed:** Club executives will perceive event creation on UQ-Connect as redundant work unless the app offers automated cross-posting to Facebook/Instagram/Discord.
*   **Test Design:** Ask club leaders: *"Imagine you're running a club and had to post every event through UQ Connect instead of Facebook, email, or other platforms. What would need to be true about the app for that to not feel like extra work?"*
*   **Success Metric:** We are right if at least 80% of club leaders state they would only adopt UQ Connect if it integrates with or cross-posts to their existing marketing channels.

### Hypothesis 8: Discovery vs. Familiarity
*   **What We Believed:** The category-based filtering and search layout in UQ-Connect allows students to discover unfamiliar, niche clubs rather than just reinforcing awareness of top-tier clubs they already know.
*   **Test Design:** Have students browse the Clubs Directory using filters and ask: *"When you were browsing clubs, did the search and filter help you find anything you didn't already know about, or were you mostly seeing clubs you'd heard of before?"*
*   **Success Metric:** We are right if more than 65% of students discover a new, relevant club they were previously unaware of.

### Hypothesis 9: Activity Creation Flow Realism
*   **What We Believed:** Club executives and hosts will find the activity creation and joining flow realistic for real campus events, but will identify critical missing operational features (like attendance caps and RSVP tracking).
*   **Test Design:** Walk club execs through the "Host Open Social" creation flow in the prototype and ask: *"When you saw the activity creation and joining flow, did it feel like something a club exec would actually set up for a real event, or did it feel like it was missing things they'd need?"*
*   **Success Metric:** We are right if at least 70% of club executives find the layout realistic, but 100% request adding at least one operational field (like attendance caps).

---

## Part 3: MVP Learning Cards

### Learning Card 1: Skill-Tiering Validates Social Safety
*   **Refer to:** Hypothesis 1
*   **We Observed That:** 8 out of 10 socially anxious students chose Mockup B (with the "Tier: Newbie" tag). They noted that seeing the word "Newbie" removed the fear of "not being good enough" or "slowing down the group."
*   **From This We Learnt That:** Skill-level transparency is a primary driver of psychological safety.
*   **Therefore We Will:** Make "Skill Tier" a mandatory field in the event creation flow of the UQ-Connect MVP.

### Learning Card 2: Immediacy Drives Spontaneous Engagement
*   **Refer to:** Hypothesis 2
*   **We Observed That:** 90% of tested users successfully found a card within 10 seconds on the Live Feed, compared to over a minute of searching and filtering on the static directory mockup.
*   **From This We Learnt That:** Time-sensitive discovery solves the information decay and fragmentation problem for students looking to occupy gap hours.
*   **Therefore We Will:** Set the "Live Feed" as the default home tab of the UQ-Connect application.

### Learning Card 3: Formal Meetings Overwhelm, Casual Chats Connect (Refuted/Pivoted)
*   **Refer to:** Hypothesis 3
*   **We Observed That:** Only 50% of participants were willing to book a formal consultation. Qualitative feedback showed comments like: *"It feels like I'm meeting a boss, which makes me more nervous."* However, they were highly receptive when the booking was styled as a casual "Quick chat over coffee with a peer."
*   **From This We Learnt That:** The human bridge must be low-stakes. The presentation and naming of onboarding support dictates its adoption rate.
*   **Therefore We Will:** Rename the feature from "Consultations" to "Pathfinder Chats" and present mentors with casual, friendly bios and a simple "Book Chat" trigger.

### Learning Card 4: Price and Social Proof Reduce Friction
*   **Refer to:** Hypothesis 4
*   **We Observed That:** 85% of users stated that seeing the pricing upfront (e.g., "$2.00 / year") and reading past milestones (e.g., *"HackRes 2025: 300+ coders"*) made the club feel active, legitimate, and worth joining.
*   **From This We Learnt That:** Transparency in cost and social proof are critical pain relievers for students suffering from decision-making friction.
*   **Therefore We Will:** Mandate membership price display and a "Memories & Highlights" section on all club profile pages.

### Learning Card 5: Actual Pathfinder Engagement
*   **Refer to:** Hypothesis 5
*   **We Observed That:** 65% of socially anxious students said they would actually use the "Book Chat" button to contact a senior member if they were attending an event alone. However, 35% stated they might still hesitate because they "don't know what to say first" or might view it as a last resort.
*   **From This We Learnt That:** While styling the feature as a casual chat makes it far less intimidating, we must lower the friction even further by introducing pre-filled message prompts or icebreakers.
*   **Therefore We Will:** Implement pre-written icebreaker options in the Pathfinder chat window to help students initiate the conversation.

### Learning Card 6: Notification Fatigue and Migration Friction
*   **Refer to:** Hypothesis 6
*   **We Observed That:** 80% of students expressed major hesitation about moving active club chats away from Discord or Facebook Messenger. They worry about missing notifications, stating: *"If it's not on Messenger/Discord, I won't open it unless I remember to."*
*   **From This We Learnt That:** Trying to completely replace students' primary communication apps (Discord, Messenger) creates massive migration friction. UQ-Connect should act as an *aggregator and gateway* for events rather than a full-scale replacement for daily club social chats.
*   **Therefore We Will:** Focus UQ-Connect on event broadcasting and discovery, while allowing clubs to link their existing Discord/Messenger group chats in their profiles.

### Learning Card 7: Club Exec Integration Requirements
*   **Refer to:** Hypothesis 7
*   **We Observed That:** 90% of club executives interviewed stated that posting events on a new platform is "extra work" they would avoid unless it integrated with their existing Facebook, Instagram, or email newsletter workflows.
*   **From This We Learnt That:** For club executive adoption, workflow integration is crucial. We must minimize duplicate entry to ensure the platform's data feed remains active and accurate.
*   **Therefore We Will:** Prioritize a "Cross-Post to Socials" button and calendar integration (e.g., Google Calendar export) in the club admin dashboard.

### Learning Card 8: Efficacy of Category-Based Filtering
*   **Refer to:** Hypothesis 8
*   **We Observed That:** 70% of students discovered at least one club they had never heard of before (e.g., *Bakeology* or *Cyber Squad*) when browsing the prototype using interest tabs.
*   **From This We Learnt That:** Categorized navigation (e.g., Sport, Art, Hobby, Tech) and price filtering are highly effective at exposing students to niche, low-cost activities that match their specific interests.
*   **Therefore We Will:** Keep category-based filter chips prominently displayed at the top of the Clubs Directory.

### Learning Card 9: Operational Gaps in Activity Creation Flow
*   **Refer to:** Hypothesis 9
*   **We Observed That:** While 80% of club execs found the creation layout intuitive, 100% of them requested logistical fields that were missing in the MVP prototype, specifically: attendee limits/caps, equipment requirements, and weather dependencies.
*   **From This We Learnt That:** A realistic event creation tool cannot just broadcast name and time; it must support event logistics to be useful for real-world campus management.
*   **Therefore We Will:** Expand the event creation form to include fields for: "Equipment Needed", "Attendee Limit/Cap", and "Conditions/Weather Notes" in the final MVP specifications.

---

## Part 4: Evidence of Iterative Design & Learning

Our MVP features were decided through a structured, data-driven cycle across three iterations:

```
[Iteration 1: Problem Validation]
  └─ Learned that information is fragmented and students fear attending alone.
  └─ Result: Proposed the initial 3 pillars (Central feed, Skill-tiered socials, 1-on-1 support).

[Iteration 2: Digital Prototype Testing]
  └─ Interactive prototype (uq-connect.html) built.
  └─ Tested with students (Kenny, Max, Asani, Abby).
  └─ Learned that "Formal booking" fails; "Memories/Highlights" and "Search/Filters" are missing.

[Iteration 3: Migration & Executive UX Validation]
  └─ Tested platform migration hesitancy, executive workload, and creation flow realism.
  └─ Learned that replacing Discord/Messenger fails; execs demand calendar integration/cross-posting.
  └─ Identified missing operational fields (attendee caps, equipment requirements).

[Final MVP Refinement]
  └─ Redesigned Consultation Hub into casual "Pathfinder Hub" (peer-to-peer).
  └─ Integrated price transparency and "Memories & Highlights" on club pages.
  └─ Positioned UQ-Connect as an Event Gateway linking to Discord/Messenger.
  └─ Added logistical fields (Equipment, Cap, Conditions) in the Open Social Form.
```
