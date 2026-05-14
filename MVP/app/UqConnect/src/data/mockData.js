export const activities = [
  {
    id: 1,
    title: "Casual Tennis Hit",
    location: "UQ Tennis Courts",
    time: "Starting in 15m",
    tier: "Hobbyist",
    vibes: ["Chill", "Outdoors"],
    attendees: 3,
    maxAttendees: 4,
    organizer: "Alex M.",
  },
  {
    id: 2,
    title: "LeetCode & Coffee",
    location: "Merlo Coffee",
    time: "In 1 hour",
    tier: "Newbie",
    vibes: ["Academic", "Tech"],
    attendees: 5,
    maxAttendees: 8,
    organizer: "Sarah T.",
  },
  {
    id: 3,
    title: "Bouldering Session",
    location: "Urban Climb West End",
    time: "Tonight 6pm",
    tier: "Competitive",
    vibes: ["Active", "Indoor"],
    attendees: 2,
    maxAttendees: 4,
    organizer: "Jake P.",
  },
];

export const clubs = [
  // 10 Academic Clubs
  {
    id: 1, name: "UQ Computing Society (UQCS)", category: "Academic",
    tags: ["Tech", "Networking", "Workshops"], logo: "💻", price: "$5",
    description: "The largest tech club at UQ. We host weekly hackathons, study sessions, and industry networking events.",
    memories: ["Hackathon 2025 Winners", "Google Office Tour", "Weekly Study Sesh"],
    social: { ig: "@uqcs", discord: "discord.gg/uqcs" }
  },
  {
    id: 2, name: "UQ Engineering Society (EBUS)", category: "Academic",
    tags: ["Engineering", "Professional", "Social"], logo: "⚙️", price: "$10",
    description: "Connecting engineering students across all disciplines. Annual balls, networking nights, and study groups.",
    memories: ["Eng Ball 2024", "Industry Night", "BBQ"], social: { ig: "@uqebus" }
  },
  {
    id: 3, name: "UQ Pre-Medical Society", category: "Academic",
    tags: ["Health", "Mentoring", "GAMSAT"], logo: "🩺", price: "$5",
    description: "Supporting students on their journey to medicine. Interview prep, GAMSAT workshops, and clinical skill sessions.",
    memories: ["Suturing Workshop", "GAMSAT Prep", "Med Mixer"], social: { ig: "@uqpms" }
  },
  {
    id: 4, name: "UQ Law Society", category: "Academic",
    tags: ["Law", "Mooting", "Professional"], logo: "⚖️", price: "$15",
    description: "The peak representative body for UQ law students. We organize clerkship seminars, mooting competitions, and social events.",
    memories: ["Law Ball", "Clerkship Evening", "Moot Finals"], social: { ig: "@uqls" }
  },
  {
    id: 5, name: "UQ Business Association", category: "Academic",
    tags: ["Business", "Networking", "Consulting"], logo: "📊", price: "$10",
    description: "Bridging the gap between students and the corporate world through case competitions and networking.",
    memories: ["Case Comp 2024", "Corporate Mixer", "Consulting Workshop"], social: { ig: "@uqba" }
  },
  {
    id: 6, name: "UQ Physics Club", category: "Academic",
    tags: ["Science", "Research", "Social"], logo: "🌌", price: "$0",
    description: "For lovers of the cosmos and quantum mechanics. Observatory nights, guest lectures, and movie nights.",
    memories: ["Observatory Night", "CERN Virtual Tour", "Pizza & Physics"], social: { ig: "@uqphysics" }
  },
  {
    id: 7, name: "UQ Data Science Club", category: "Academic",
    tags: ["Data", "AI", "Workshops"], logo: "📈", price: "$5",
    description: "Learn Python, R, and Machine Learning through hands-on workshops and Kaggle competitions.",
    memories: ["Kaggle Hackathon", "AI Seminar", "Datathon Winners"], social: { ig: "@uqdata" }
  },
  {
    id: 8, name: "UQ Psychology Students Association", category: "Academic",
    tags: ["Psychology", "Mental Health", "Social"], logo: "🧠", price: "$5",
    description: "Connecting psychology undergrads. We host career nights, mental health awareness events, and trivia.",
    memories: ["Career Night", "Trivia 2024", "Mindfulness Sesh"], social: { ig: "@uqpsa" }
  },
  {
    id: 9, name: "UQ Robotics Club", category: "Academic",
    tags: ["Robotics", "Hardware", "Competitions"], logo: "🤖", price: "$10",
    description: "Build battlebots, drones, and autonomous rovers. Open to all skill levels, from beginners to experts.",
    memories: ["Battlebots 2024", "Drone Racing", "Soldering Workshop"], social: { ig: "@uqrobotics" }
  },
  {
    id: 10, name: "UQ Architecture Society", category: "Academic",
    tags: ["Design", "Studio", "Creative"], logo: "🏛️", price: "$5",
    description: "Supporting architecture students through studio nights, portfolio reviews, and firm tours.",
    memories: ["Firm Tour", "Studio Sleepover", "Portfolio Review"], social: { ig: "@uqarch" }
  },

  // 15 Non-Academic Clubs
  {
    id: 11, name: "UQ Tennis Club", category: "Non-Academic",
    tags: ["Sport", "Active", "Social"], logo: "🎾", price: "$10",
    description: "Join us for weekly social hits, competitive leagues, and coaching sessions at the UQ Sport Tennis Centre.",
    memories: ["UniGames 2025", "Social Pizza Night", "Beginner Coaching"], social: { ig: "@uqtennis" }
  },
  {
    id: 12, name: "UQ Bakeology", category: "Non-Academic",
    tags: ["Food", "Social", "Hobby"], logo: "🧁", price: "$0",
    description: "A community for baking enthusiasts of all levels. We share recipes, host bake-offs, and eat lots of cake!",
    memories: ["Cupcake Decorating", "Sourdough Masterclass", "Bake Sale"], social: { ig: "@uqbakeology" }
  },
  {
    id: 13, name: "UQ Anime Society", category: "Non-Academic",
    tags: ["Anime", "Manga", "Social"], logo: "🎌", price: "$5",
    description: "Weekly screenings, manga swaps, and cosplay workshops. The best place for weebs on campus.",
    memories: ["Cosplay Picnic", "Movie Screening", "Maid Cafe"], social: { ig: "@uqanime" }
  },
  {
    id: 14, name: "UQ Mountaineering Club", category: "Non-Academic",
    tags: ["Outdoors", "Adventure", "Sport"], logo: "⛰️", price: "$15",
    description: "Rock climbing, hiking, and mountaineering trips every weekend. Gear hire included with membership.",
    memories: ["Glasshouse Hike", "Kangaroo Point Climb", "Camping Trip"], social: { ig: "@uqmc" }
  },
  {
    id: 15, name: "UQ eSports", category: "Non-Academic",
    tags: ["Gaming", "Competitive", "Social"], logo: "🎮", price: "$5",
    description: "From League of Legends to Smash Bros. We host LAN parties, tournaments, and viewing parties.",
    memories: ["LAN Party 2024", "Smash Tourney", "Worlds Viewing"], social: { ig: "@uqesports", discord: "discord.gg/uqesports" }
  },
  {
    id: 16, name: "UQ Harry Potter Alliance", category: "Non-Academic",
    tags: ["Fandom", "Social", "Trivia"], logo: "⚡", price: "$0",
    description: "Sorting ceremonies, Yule Balls, and endless trivia. Join your house and compete for the House Cup.",
    memories: ["Yule Ball", "Sorting Ceremony", "Trivia Night"], social: { ig: "@uqhpa" }
  },
  {
    id: 17, name: "UQ Dance Club", category: "Non-Academic",
    tags: ["Dance", "Creative", "Active"], logo: "💃", price: "$10",
    description: "Hip hop, contemporary, jazz, and K-pop. Beginner classes and performance teams available.",
    memories: ["Showcase 2024", "K-Pop Workshop", "End of Year Ball"], social: { ig: "@uqdance" }
  },
  {
    id: 18, name: "UQ Photography Society", category: "Non-Academic",
    tags: ["Art", "Creative", "Hobby"], logo: "📷", price: "$5",
    description: "Photo walks, editing workshops, and darkroom access. All skill levels and camera types welcome.",
    memories: ["City Photo Walk", "Portrait Workshop", "Exhibition"], social: { ig: "@uqphoto" }
  },
  {
    id: 19, name: "UQ Board Games Society", category: "Non-Academic",
    tags: ["Games", "Social", "Hobby"], logo: "🎲", price: "$0",
    description: "We meet twice a week to play everything from Catan to Twilight Imperium. Massive games library available.",
    memories: ["Game Night", "Tournament", "RPG Campaign"], social: { ig: "@uqboardgames" }
  },
  {
    id: 20, name: "UQ Surfing Club", category: "Non-Academic",
    tags: ["Sport", "Outdoors", "Social"], logo: "🏄", price: "$20",
    description: "Weekend surf trips to the Gold Coast and Sunshine Coast. Surfboard hire and transport included.",
    memories: ["Gold Coast Trip", "Beginner Lesson", "Beach BBQ"], social: { ig: "@uqsurf" }
  },
  {
    id: 21, name: "UQ Music Society", category: "Non-Academic",
    tags: ["Music", "Creative", "Jam"], logo: "🎵", price: "$5",
    description: "Jam sessions, open mics, and band networking. We provide the gear, you provide the talent.",
    memories: ["Open Mic Night", "Red Room Gig", "Jam Session"], social: { ig: "@uqmusic" }
  },
  {
    id: 22, name: "UQ Debating Society", category: "Non-Academic",
    tags: ["Speaking", "Competitive", "Social"], logo: "🎤", price: "$5",
    description: "The oldest society at UQ. Weekly internal debates, public speaking workshops, and intervarsity tournaments.",
    memories: ["Australs 2024", "Internal Finals", "Novice Workshop"], social: { ig: "@uqdebate" }
  },
  {
    id: 23, name: "UQ K-Pop Society", category: "Non-Academic",
    tags: ["Music", "Dance", "Social"], logo: "✨", price: "$5",
    description: "Celebrating Korean pop culture through dance covers, album unboxings, and random play dances.",
    memories: ["Random Play Dance", "Album Giveaway", "Dance Cover"], social: { ig: "@uqkpop" }
  },
  {
    id: 24, name: "UQ Film Appreciation", category: "Non-Academic",
    tags: ["Film", "Art", "Social"], logo: "🎬", price: "$0",
    description: "Weekly screenings of classic, indie, and international films followed by lively discussions.",
    memories: ["Tarantino Marathon", "Oscar Watch Party", "Indie Night"], social: { ig: "@uqfilm" }
  },
  {
    id: 25, name: "UQ Chess Club", category: "Non-Academic",
    tags: ["Games", "Competitive", "Mental"], logo: "♟️", price: "$0",
    description: "Casual games, blitz tournaments, and coaching. Whether you're 500 or 2000 Elo, you'll find a match.",
    memories: ["Blitz Tournament", "Simul Exhibition", "Casual Friday"], social: { ig: "@uqchess" }
  }
];

export const mentors = [
  { id: 1, name: "Dr. Emily Chen", role: "Software Engineering Alumni", specialty: "Tech Careers", avatar: "👩‍💻" },
  { id: 2, name: "Marcus Johnson", role: "President, UQ Business Soc", specialty: "Leadership", avatar: "👨‍💼" },
  { id: 3, name: "Priya Sharma", role: "4th Year Design Student", specialty: "UI/UX Portfolios", avatar: "👩‍🎨" }
];
