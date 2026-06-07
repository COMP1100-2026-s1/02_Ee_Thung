# 🧠 Master Learning Cards: User Research Insights

**Project:** UQ-Connect (The Extracurricular Discovery Solution)  
**Document:** Consolidated Learning Cards (Iterations 1, 2, and 3)

---

## 📅 Iteration 1: Problem Discovery

### Learning Card 1: Information Fragmentation
*   **Refer to:** [Test Card 1: Information Fragmentation](./test_cards.md#hypothesis-1-information-fragmentation)
*   **We Believed That:** Students feel overwhelmed by the sheer number of extracurricular options and struggle to find them because information is fragmented across too many platforms.
*   **We Observed That:** 16 out of 20 students interviewed found it difficult to keep track of upcoming events because information is scattered across Instagram, Discord, and email. 80% reported missing opportunities due to lack of awareness, stating that clubs do not post in a consolidated way.
*   **From This We Learnt That:** Centralized, real-time discovery is highly requested. Even though information exists, the lack of a single consolidated feed creates a disconnect between active clubs and interested students.
*   **Therefore We Will:** Accept this hypothesis and focus our software solution on aggregating diverse event data into a single, searchable interface that provides a bird's-eye view of campus life.

### Learning Card 2: Discovery Channels (Market Day vs. Digital)
*   **Refer to:** [Test Card 2: Discovery Channels (Market Day)](./test_cards.md#hypothesis-2-discovery-channels-market-day)
*   **We Believed That:** Market Day is the primary way students discover clubs, and if they miss it, they remain disconnected for the rest of the semester.
*   **We Observed That:** While Market Day is effective for social impulse discovery, 14 out of 20 students noted other significant discovery channels exist. Specifically, 70% discovered career-based programs through university digital newsletters, emails, or prior cultural associations.
*   **From This We Learnt That:** Market Day is great for impulse discovery, but a comprehensive solution must also cater to "planned discovery" via digital channels, especially for educational and faculty-led extracurriculars.
*   **Therefore We Will:** Pivot our hypothesis to ensure our solution serves as a digital extension of Market Day, capturing both social/impulse interests and long-term professional development opportunities.

### Learning Card 3: Career vs. Interest Motivation
*   **Refer to:** [Test Card 3: Career vs. Interest Motivation](./test_cards.md#hypothesis-3-career-vs-interest-motivation)
*   **We Believed That:** International students prioritize clubs that provide social connection and belonging, whereas domestic students prioritize career-aligned activities.
*   **We Observed That:** 18 out of 25 students (72%) seek a strategic balance. While domestic students often valued "employability" (15/20), international students overwhelmingly prioritized hobby-based activities for "work-life balance" and stress relief (17/20), explicitly preferring clubs outside their study bubble.
*   **From This We Learnt That:** A successful platform must treat social-wellbeing and career-readiness as equally important categories, allowing students to filter activities based on their current immediate needs (e.g., "stress relief" vs. "networking").
*   **Therefore We Will:** Accept that our solution must provide clear categorization for both social and educational activities to help students manage their holistic university experience.

### Learning Card 4: The "Social Safety" Factor
*   **Refer to:** [Test Card 4: The "Social Safety" Factor](./test_cards.md#hypothesis-4-the-social-safety-factor)
*   **We Believed That:** Students are hesitant to join new activities because they are afraid of attending the first meeting alone without a pre-existing social connection.
*   **We Observed That:** 80% of students interviewed explicitly stated they are more likely to join if a friend is already a member. Qualitative data showed that joining alone is viewed as a "big social hurdle," with some students admitting to being "too shy" to introduce themselves to large groups of strangers without a prior connection.
*   **From This We Learnt That:** Having a "social bridge" or knowing the "vibe" of a club beforehand is often more influential in the decision-making process than the actual activity or hobby the club offers.
*   **Therefore We Will:** Accept this hypothesis and explore software features that facilitate "buddy systems" or social indicators (e.g., showing interest from mutual connections) to lower the entry barrier for new members.

---

## 📅 Iteration 2: Solution Validation

### Learning Card 5: Intimidating Sign-Up Process
*   **Refer to:** [Test Card 5: Fragmented Sign-Up Friction](./test_cards.md#hypothesis-5-fragmented-sign-up-friction)
*   **We Believed That:** The current club discovery and sign-up process is fragmented, frustrating, and intimidating, creating barriers that prevent students from joining.
*   **We Observed That:** 18 out of 20 students interviewed reported at least one significant friction point. 75% cited information scattered across Instagram, Discord, and UQU site as a major pain point. Market Day overcrowding and fear of showing up alone were also prominent.
*   **From This We Learnt That:** The barrier to participation is a system-level failure. Scattered info, lack of transparency, and social anxiety prevent motivated students from ever taking the leap to join.
*   **Therefore We Will:** Accept this hypothesis and build a three-pillar solution (centralised feed, skill-tiered socials, and personalised onboarding) to tackle each layer of friction.

### Learning Card 6: UX Preferences for Club Discovery
*   **Refer to:** [Test Card 6: Browse and Filter Preferences](./test_cards.md#hypothesis-6-browse-and-filter-preferences)
*   **We Believed That:** Students have clear, converging preferences for how they browse and filter clubs.
*   **We Observed That:** 75% of students preferred category or interest-based tab filtering as their primary discovery method, making it the clear dominant preference. Keyword search was the second most cited option. Secondary preferences diverged (commitment level, price, personality quiz).
*   **From This We Learnt That:** While category browsing is a clear MVP priority, students have different secondary needs based on personal constraints. A single filtering method will not serve everyone.
*   **Therefore We Will:** Accept this hypothesis. Category-based filtering should anchor the MVP UX. Keyword search should be included as a secondary layer, while commitment-level and price filtering are scoped for future iterations.

### Learning Card 7: Unmet Feature Needs Beyond the Three-Pillar Solution
*   **Refer to:** [Test Card 7: Unmet Feature Expectations](./test_cards.md#hypothesis-7-unmet-feature-expectations)
*   **We Believed That:** Students have specific feature expectations and unmet needs not addressed by our three-pillar solution.
*   **We Observed That:** 90% of students suggested at least one additional feature. The most recurring requests were: real event photos/media, club calendars, recency/activity indicators, price transparency, and event reminders.
*   **From This We Learnt That:** While our three pillars address the core discovery and social barriers, students want enough contextual information (cost, activity levels, vibe) to make a confident decision before committing.
*   **Therefore We Will:** Accept this hypothesis. Event calendars and past memories/highlights should be prioritised in the MVP club profiles. Activity indicators and pricing transparency will be high-priority additions for the next iteration.

### Learning Card 8: One-on-One Consultations Reduce Hesitation (Pivoted)
*   **Refer to:** [Test Card 8: One-on-One Support Bridge (Pivoted)](./test_cards.md#hypothesis-8-one-on-one-support-bridge-pivoted)
*   **We Believed That:** One-on-one consultations with student ambassadors or club leaders would reduce student hesitation and increase confidence.
*   **We Observed That:** 80% said the 1-on-1 booking feature would increase their confidence, but only 50% would realistically book one. Qualitative feedback showed that scheduling a formal "Consultation" felt like a job interview or a gatekeeping step. However, students responded highly positively when the booking was styled as a casual peer-to-peer coffee chat.
*   **From This We Learnt That:** The human bridge must be extremely low-stakes. The presentation and naming of onboarding support dictate its adoption rate.
*   **Therefore We Will:** Accept this hypothesis and pivot the feature in our MVP from "Consultation" to "Pathfinder Chats"—presenting mentors with casual, friendly bios and simple "Book Chat" buttons.

---

## 📅 Iteration 3: MVP & Migration Validation

### Learning Card 9: Actual Pathfinder Engagement
*   **Refer to:** [Test Card 9: Actual Pathfinder Engagement](./test_cards.md#hypothesis-9-actual-pathfinder-engagement)
*   **We Observed That:** 65% of socially anxious students said they would actually use the "Book Chat" button to contact a senior member if they were attending an event alone. However, 35% stated they might still hesitate because they "don't know what to say first" or might view it as a "nice-to-have" option they would only use as a last resort.
*   **From This We Learnt That:** While styling the feature as a casual chat makes it far less intimidating, we must lower the friction even further by introducing pre-filled message prompts or icebreakers.
*   **Therefore We Will:** Accept this hypothesis and implement pre-written icebreaker options in the Pathfinder chat window to help students initiate the conversation.

### Learning Card 10: Notification Fatigue and Migration Friction
*   **Refer to:** [Test Card 10: Platform Migration Hesitancy](./test_cards.md#hypothesis-10-platform-migration-hesitancy)
*   **We Observed That:** 80% of students expressed major hesitation about moving active club chats away from Discord or Facebook Messenger. They worry about missing notifications, stating: *"If it's not on Messenger/Discord, I won't open it unless I remember to."*
*   **From This We Learnt That:** Trying to completely replace students' primary communication apps (Discord, Messenger) creates massive migration friction. UQ-Connect should act as an *aggregator and gateway* for events rather than a full-scale replacement for daily club social chats.
*   **Therefore We Will:** Focus UQ-Connect on event broadcasting and discovery, while allowing clubs to link their existing Discord/Messenger group chats in their profiles.

### Learning Card 11: Club Exec Integration Requirements
*   **Refer to:** [Test Card 11: Club Executive Workload & Adoption](./test_cards.md#hypothesis-11-club-executive-workload--adoption)
*   **We Observed That:** 90% of club executives interviewed stated that posting events on a new platform is "extra work" they would avoid unless it integrated with their existing Facebook, Instagram, or email newsletter workflows.
*   **From This We Learnt That:** For club executive adoption, workflow integration is crucial. We must minimize duplicate entry to ensure the platform's data feed remains active and accurate.
*   **Therefore We Will:** Prioritize a "Cross-Post to Socials" button and calendar integration (e.g., Google Calendar export) in the club admin dashboard.

### Learning Card 12: Efficacy of Category-Based Filtering
*   **Refer to:** [Test Card 12: Discovery vs. Familiarity](./test_cards.md#hypothesis-12-discovery-vs-familiarity)
*   **We Observed That:** 70% of students discovered at least one club they had never heard of before (e.g., *Bakeology* or *Cyber Squad*) when browsing the prototype using interest tabs.
*   **From This We Learnt That:** Categorized navigation (e.g., Sport, Art, Hobby, Tech) and price filtering are highly effective at exposing students to niche, low-cost activities that match their specific interests.
*   **Therefore We Will:** Keep category-based filter chips prominently displayed at the top of the Clubs Directory.

### Learning Card 13: Operational Gaps in Activity Creation Flow
*   **Refer to:** [Test Card 13: Activity Creation Flow Realism](./test_cards.md#hypothesis-13-activity-creation-flow-realism)
*   **We Observed That:** While 80% of club execs found the creation layout intuitive, 100% of them requested logistical fields that were missing in the MVP prototype, specifically: attendee limits/caps, equipment requirements, and weather dependencies.
*   **From This We Learnt That:** A realistic event creation tool cannot just broadcast name and time; it must support event logistics to be useful for real-world campus management.
*   **Therefore We Will:** Expand the event creation form to include fields for: "Equipment Needed", "Attendee Limit/Cap", and "Conditions/Weather Notes" in the final MVP specifications.
