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
*   **We Believed That:** Reframing the Pathfinder feature as a casual peer booking will lead to actual usage (students sending messages when anxious) rather than being viewed as a purely hypothetical feature they would never use.
*   **We Observed That:** While the casual chat concept was liked, multiple students (specifically Hilda and Tom) stated they would hesitate to use it because sending a "cold message to a random person" feels awkward and they "don't know what to say." However, they explicitly stated they would be much more likely to reach out if they had more profile context on the senior member—such as their degree major, current clubs, and internship or work experience—which would help them find common ground and make the message feel less random. One student also noted that having a chat room before the event would make it easier to find someone to attend with.
*   **From This We Learnt That:** A casual framing and pre-filled icebreakers are helpful, but reducing the "cold start" social friction requires transparency. Students need to see a detailed, relatable profile of the Pathfinder (degree, interests, professional background) to establish a mutual connection before initiating contact.
*   **Therefore We Will:** Accept the hypothesis and expand Pathfinder profiles to display rich contextual metadata (e.g., Major/Degree, Year of Study, Club Memberships, and Career Interests/Internships) alongside implementing pre-written icebreaker options in the chat window.

### Learning Card 10: Notification Fatigue and Migration Friction
*   **Refer to:** [Test Card 10: Platform Migration Hesitancy](./test_cards.md#hypothesis-10-platform-migration-hesitancy)
*   **We Believed That:** If a club decides to move all activity updates and chats to UQ Connect, students' primary source of hesitancy will be notification fatigue and the friction of checking a new app.
*   **We Observed That:** Students expressed major hesitation about setting up another platform when they are already active on Discord or Facebook Messenger, stating that it adds extra noise. However, they also indicated that official UQ integration/endorsement, tie-ins with UQ student accounts, or unique features that Discord doesn't have (like official campus event management) would make the migration feel more legitimate and worth the switch.
*   **From This We Learnt That:** While UQ-Connect should act as an aggregator/gateway rather than a complete replacement for daily club social chats, securing official university endorsement and integrating with student accounts is critical to overcoming the initial platform migration barrier.
*   **Therefore We Will:** Focus UQ-Connect on event broadcasting and official campus integration (allowing clubs to link their existing Discord/Facebook chats), and work toward official UQ single sign-on (SSO) and endorsement to establish trust and legitimacy.

### Learning Card 11: Club Exec Integration Requirements
*   **Refer to:** [Test Card 11: Club Executive Workload & Adoption](./test_cards.md#hypothesis-11-club-executive-workload--adoption)
*   **We Believed That:** Club executives will perceive event creation on UQ-Connect as redundant work unless the app offers automated cross-posting to Facebook/Instagram/Discord.
*   **We Observed That:** 90% of club leaders interviewed stated posting events on a new platform is redundant work. They noted that the tool must be fast to use (faster than Facebook), actually reach students with working notifications, and support multi-admin co-management since events are organized by a committee, not a single person. They also emphasized the importance of RSVP tracking for logistical planning (e.g., venue space, catering).
*   **From This We Learnt That:** Workflow efficiency is not just about cross-posting; it's about collaborative event management. The admin experience must accommodate committee-wide coordination, quick data entry, and robust attendee tracking to compete with existing methods.
*   **Therefore We Will:** Accept this hypothesis. Prioritize a "Cross-Post to Socials" feature, calendar integration, and implement a collaborative co-management system where multiple executive accounts can co-host/edit events, alongside RSVP list tracking.

### Learning Card 12: Efficacy of Category-Based Filtering
*   **Refer to:** [Test Card 12: Discovery vs. Familiarity](./test_cards.md#hypothesis-12-discovery-vs-familiarity)
*   **We Believed That:** The category-based filtering and search layout in UQ-Connect allows students to discover unfamiliar, niche clubs rather than just reinforcing awareness of top-tier clubs they already know.
*   **We Observed That:** 70% of students discovered unfamiliar, niche clubs (like Photography, Hiking, and Robotics) when browsing. Students explicitly noted they would never go out of their way to dig through the official UQ website for these. One student suggested implementing a personalized recommendation feed ("For Your Page") that automatically highlights relevant clubs or events based on the user's past browsing patterns (e.g., showing photography contests).
*   **From This We Learnt That:** Centralized, category-based discovery is highly effective for exposing students to niche clubs. Adding personalized recommendation algorithms could further improve discovery relevance and user engagement.
*   **Therefore We Will:** Keep category-based filter chips prominently displayed at the top of the Clubs Directory, and plan a "Recommended For You" (FYP) section for future development iterations.

### Learning Card 13: Operational Gaps in Activity Creation Flow
*   **Refer to:** [Test Card 13: Activity Creation Flow Realism](./test_cards.md#hypothesis-13-activity-creation-flow-realism)
*   **We Believed That:** Club executives and hosts will find the activity creation and joining flow realistic for real campus events, but will identify critical missing operational features (like attendance caps and RSVP tracking).
*   **We Observed That:** While the basic creation flow was considered clean and intuitive, participants noted missing operational features. Key requests included attendee capacity limits, ticket/payment link integration for paid events (cover charges), showing "spots remaining" to drive registration urgency, and interactive map/location mapping for on-campus activities.
*   **From This We Learnt That:** To be viable for real campus event planning, the MVP must go beyond basic time and description fields to support standard university event logistics, financial ticketing, and precise campus navigation.
*   **Therefore We Will:** Accept the hypothesis and expand the MVP event creation flow to support: attendee limits, "spots remaining" indicators, ticket links (for paid events), equipment/weather requirements, and campus map/location integration.
