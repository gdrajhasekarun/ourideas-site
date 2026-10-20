// Your ideas. Edit this file directly: add, remove or reorder entries.
//
// status : "exploring" | "prototype" | "ready"      (shown as Exploring / Prototype / Ready to demo)
// Optional fields: problem, approach, next, tags (list), url (demo link), urlLabel (button text)
// Cards appear on the page in the same order as this list.

window.IDEAS = [
  {
    title: "Family Expense Tracker",
    status: "prototype",
    pitch: "A phone-first app for tracking family spending, with a payment-day helper.",
    problem: "Cards and accounts are spread across many apps, and nothing shows what to pay from where on payment day.",
    approach: "An installable web app with quick manual entry for two users, category reports and a payment-day view.",
    next: "Tidy the payment-day view and walk through it.",
    tags: ["PWA", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Sandbox Factory",
    status: "prototype",
    pitch: "On-demand, isolated sandboxes for trying code and agents safely.",
    problem: "Trying new code or agent ideas safely usually means setting up a fresh environment by hand.",
    approach: "A small service that creates short-lived sandboxes on my own cluster and cleans them up afterwards.",
    next: "Show a live create-and-destroy flow.",
    tags: ["Kubernetes", "TypeScript", "Agents"],
  },
  {
    title: "AI Development Agents",
    status: "exploring",
    pitch: "An app where LangChain agents develop and test an application.",
    problem: "Building and testing an application is a chain of hand-offs between planning, coding and QA.",
    approach: "LangChain agents handle the lifecycle steps, from development through testing, inside a single app.",
    next: "Show an end-to-end run.",
    tags: ["LangChain", "AI agents", "Test automation", "AI-driven lifecycle"],
  },
  {
    title: "Learning Vault",
    status: "exploring",
    pitch: "Obsidian notes synced through git, shared across my devices and Claude accounts.",
    problem: "What I learn ends up scattered across chats, notes and bookmarks.",
    approach: "One Obsidian vault in a git repo that stays in sync on Mac and iPhone.",
    next: "Settle the folder structure and sync flow.",
    tags: ["Obsidian", "Git"],
  },
];
