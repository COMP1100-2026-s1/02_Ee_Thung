# 🧠 MVP Learning Cards: User Research Insights

**Project:** UQ-Connect - MVP Definition  
**Version:** Iteration 3 (Final MVP Learnings)  
**Based on:** User testing of the digital HTML prototype (`prototype/ui-ux/uq-connect.html`)

---

## Learning Card 1: Skill-Tiering Validates Social Safety

**Refer to:** [Test Card 1: The Skill-Gap Barrier](./test_cards.md#hypothesis-1-the-skill-gap-barrier-open-socials)

**We Believed That:**  
Socially anxious students are 50% more likely to join an activity if they are guaranteed that participants are at their exact skill level (Beginner/Newbie).

**We Observed That:**  
8 out of 10 socially anxious students chose Mockup B (with the "Tier: Newbie" tag). They noted that seeing the word "Newbie" removed the fear of being the worst in the room or slowing down others.

**From This We Learnt That:**  
Skill-level transparency is a primary driver of psychological safety. It addresses "impostor syndrome" directly, making students feel welcome before they even arrive.

**Therefore We Will:**  
Prioritize the "Skill-Tier" tag as a **mandatory field** for every "Open Social" created in the UQ-Connect MVP.

---

## Learning Card 2: Immediacy Drives Spontaneous Engagement

**Refer to:** [Test Card 2: Immediacy vs. Static Directory](./test_cards.md#hypothesis-2-immediacy-vs-static-directory-live-feed)

**We Believed That:**  
Students looking for immediate engagement prefer a real-time, chronological "What's on Now" feed over a static directory.

**We Observed That:**  
90% of tested users successfully found an event to attend within 10 seconds on the Live Feed, compared to over a minute of searching and filtering on the static directory mockup.

**From This We Learnt That:**  
Students don't need *more* information; they need *time-sensitive* information. Chronological ordering (closest to now first) reduces decision-making friction for spontaneous gap hours.

**Therefore We Will:**  
Focus the MVP homepage layout on a **Chronological Live Feed** (Starting Now → Starting in 1 Hour) rather than a static alphabetical list.

---

## Learning Card 3: Formal Meetings Overwhelm, Casual Chats Connect (Refuted/Pivoted)

**Refer to:** [Test Card 3: The Onboarding Support Bridge](./test_cards.md#hypothesis-3-the-onboarding-support-bridge-pathfinder-booking---refutedpivoted)

**We Believed That:**  
Socially anxious students would book formal 1-on-1 onboarding consultations.

**We Observed That:**  
Only 50% of participants were willing to book a formal consultation (falling short of our 55% target). Qualitative feedback showed that scheduling a formal "Consultation" felt like a job interview or a gatekeeping step, which *increased* anxiety. However, they responded highly positively when the booking was reframed as a casual coffee chat with a peer.

**From This We Learnt That:**  
The human bridge must be extremely low-stakes. The presentation and naming of onboarding support dictate its adoption rate.

**Therefore We Will:**  
Pivot the feature in our MVP from "Consultation" to **"Pathfinder Chats"**—presenting senior students with friendly bios and simple, low-stakes "Book Chat" buttons.

---

## Learning Card 4: Price and Social Proof Reduce Friction

**Refer to:** [Test Card 4: Vibe & Price Transparency](./test_cards.md#hypothesis-4-vibe--price-transparency-clubs-directory)

**We Believed That:**  
Displaying membership price and past "Memories" upfront on club pages would increase student trust and registration intent.

**We Observed That:**  
85% of users stated that seeing the pricing upfront (e.g., "$2.00 / year") and reading past milestones (e.g., *"HackRes 2025: 300+ coders"*) made the club feel active, legitimate, and worth joining.

**From This We Learnt That:**  
Opaque pricing and lack of social proof are major barriers that create decision-making friction. Transparent pricing and concrete text-based "Memories" act as powerful pain relievers.

**Therefore We Will:**  
Mandate membership price display and include a **"Memories & Highlights"** section on all club profile pages in the Clubs Directory.

---

## Learning Card 9: Actual Pathfinder Engagement

**Refer to:** [Test Card 9: Actual Pathfinder Engagement](./test_cards.md#hypothesis-9-actual-pathfinder-engagement)

**We Observed That:**  
65% of socially anxious students said they would actually use the "Book Chat" button to contact a senior member if they were attending an event alone. However, 35% stated they might still hesitate because they "don't know what to say first" or might view it as a "nice-to-have" option they would only use as a last resort.

**From This We Learnt That:**  
While styling the feature as a casual chat makes it far less intimidating, we must lower the friction even further by introducing pre-filled message prompts or icebreakers.

**Therefore We Will:**  
Implement pre-written icebreaker options in the Pathfinder chat window to help students initiate the conversation.

---

## Learning Card 10: Notification Fatigue and Migration Friction

**Refer to:** [Test Card 10: Platform Migration Hesitancy](./test_cards.md#hypothesis-10-platform-migration-hesitancy)

**We Observed That:**  
80% of students expressed major hesitation about moving active club chats away from Discord or Facebook Messenger. They worry about missing notifications, stating: *"If it's not on Messenger/Discord, I won't open it unless I remember to."*

**From This We Learnt That:**  
Trying to completely replace students' primary communication apps (Discord, Messenger) creates massive migration friction. UQ-Connect should act as an *aggregator and gateway* for events rather than a full-scale replacement for daily club social chats.

**Therefore We Will:**  
Focus UQ-Connect on event broadcasting and discovery, while allowing clubs to link their existing Discord/Messenger group chats in their profiles.

---

## Learning Card 11: Club Exec Integration Requirements

**Refer to:** [Test Card 11: Club Executive Workload & Adoption](./test_cards.md#hypothesis-11-club-executive-workload--adoption)

**We Observed That:**  
90% of club executives interviewed stated that posting events on a new platform is "extra work" they would avoid unless it integrated with their existing Facebook, Instagram, or email newsletter workflows.

**From This We Learnt That:**  
For club executive adoption, workflow integration is crucial. We must minimize duplicate entry to ensure the platform's data feed remains active and accurate.

**Therefore We Will:**  
Prioritize a "Cross-Post to Socials" button and calendar integration (e.g., Google Calendar export) in the club admin dashboard.

---

## Learning Card 12: Efficacy of Category-Based Filtering

**Refer to:** [Test Card 12: Discovery vs. Familiarity](./test_cards.md#hypothesis-12-discovery-vs-familiarity)

**We Observed That:**  
70% of students discovered at least one club they had never heard of before (e.g., *Bakeology* or *Cyber Squad*) when browsing the prototype using interest tabs.

**From This We Learnt That:**  
Categorized navigation (e.g., Sport, Art, Hobby, Tech) and price filtering are highly effective at exposing students to niche, low-cost activities that match their specific interests.

**Therefore We Will:**  
Keep category-based filter chips prominently displayed at the top of the Clubs Directory.

---

## Learning Card 13: Operational Gaps in Activity Creation Flow

**Refer to:** [Test Card 13: Activity Creation Flow Realism](./test_cards.md#hypothesis-13-activity-creation-flow-realism)

**We Observed That:**  
While 80% of club execs found the creation layout intuitive, 100% of them requested logistical fields that were missing in the MVP prototype, specifically: attendee limits/caps, equipment requirements, and weather dependencies.

**From This We Learnt That:**  
A realistic event creation tool cannot just broadcast name and time; it must support event logistics to be useful for real-world campus management.

**Therefore We Will:**  
Expand the event creation form to include fields for: "Equipment Needed", "Attendee Limit/Cap", and "Conditions/Weather Notes" in the final MVP specifications.
