# 🏗️ MVP Feature Architecture

**Project:** UQ-Connect - Live Student Engagement Platform  
**Version:** Iteration 2 (MVP)

---

## 1. Features Implementing Value Propositions

### Live Discovery Feed
**Purpose:** Implements Activity-First Discovery  
**What it does:** Bypasses club membership hurdles by showing what is happening now across campus.

**Key Elements:**
- Real-time event feed filtered by current time (Now → Next 24 hours)
- Shows: Activity name, location (UQ Maps integration), start time, skill tier, host info
- Chronological ordering (What's happening right now first)

---

### Skill-Tiered "Open Socials"
**Purpose:** Implements Tiered Skill-Matching  
**What it does:** Uses "Newbie/Hobbyist/Competitive" tags to remove the fear of inadequacy.

**Key Elements:**
- Every "Open Social" must have a mandatory skill tier tag
- Students can filter by skill level to find activities that match their comfort zone
- Removes the anxiety of "not being good enough"

---

### Pathfinder Booking
**Purpose:** Implements 1-on-1 Peer Mentoring  
**What it does:** A "Help" button that triggers a 15-minute coffee chat request with a senior student.

**Key Elements:**
- Quick access "Request Pathfinder" button on every Open Social
- Students can request a personalized 1-on-1 consultation to reduce hesitation
- Connects anxious students with trained senior mentors

---

### Clubs Directory
**Purpose:** Implements Club Discovery & Information Hub  
**What it does:** Provides a comprehensive, searchable directory of all UQ clubs with detailed information.

**Key Elements:**
- Browse all 220+ UQ clubs in one searchable interface
- Search by club name and filter by category (Academic/Non-Academic)
- Sub-filters for activity type (Sport, Art, Tech, Hobby, etc.) and price range
- Detailed club profile showing:
  - Club description and mission
  - Membership price per year
  - Social media links (Instagram, Discord)
  - Memories/highlights of past events
  - Club category and subcategory
- "Join Now" button to directly purchase membership through the app
- Bridges to external platforms (e.g., Humanitrix) for membership transactions

## 2. Application Flow

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
User clicks "I'm Going" (Open Social) / "Join Now" (Club) OR "Request Pathfinder" if too anxious
```

---

## 3. Minimum Viable Product (MVP) Justification

### Features Included (Core MVP)
- **Live Discovery Feed** — Activity-first discovery engine
- **Skill-Tiered Open Socials** — Safe social matching with skill transparency
- **Pathfinder Booking** — 1-on-1 mentoring for hesitant students
- **Clubs Directory** — Comprehensive searchable club profiles with membership info and social proof

### Features Excluded (Future Iterations)
- In-app messaging
- Profile customization
- Gamification
- Event reviews/ratings
- Timetable integration

**Rationale:** These four features are the absolute minimum because they address the core psychological and informational barriers identified in our thematic analysis:
1. **Social Anxiety** — Skill tiers remove fear of inadequacy; 1-on-1 mentoring provides personal support
2. **Information Fragmentation** — Live feed solves "what's happening now"; Clubs Directory solves "which clubs exist and what do they offer"
3. **Isolation** — Pathfinder provides the human bridge to first activities
4. **Decision-Making Friction** — Detailed club profiles with membership pricing and social proof (memories) reduce hesitation to join

---

## 📌 Next Steps

See **[Test Cards](./test_cards.md)** for how we validate these assumptions.  
See **[Learning Cards](./learning_cards.md)** for insights from our user research.
