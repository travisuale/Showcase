export type ScheduleBlock = {
  time: string;
  title: string;
  details: string;
};

export type RotationGroup = {
  team: string;
  stations: string[];
};

export const simpleSchedule: ScheduleBlock[] = [
  {
    time: "1:00 PM",
    title: "Warmup",
    details: "Everyone together.",
  },
  {
    time: "1:10 PM",
    title: "INDYS",
    details: "Position Drills.",
  },
  {
    time: "1:30 PM",
    title: "Group Periods",
    details: "1v1 (Skills) + 3v3 (Combo/Bigs).",
  },
  {
    time: "2:05 PM",
    title: "Competition Periods",
    details: "7v7 (Skills/Combo) + 1v1 (Bigs).",
  },
  {
    time: "3:00 PM",
    title: "Wrap-Up",
    details: "Final announcements and dismissal.",
  },
];

export const detailedSchedule: ScheduleBlock[] = [
  {
    time: "12:30 PM",
    title: "Staff Arrival + Check-In",
    details: "Lead coaches confirm field coverage, athlete flow, and school staging areas.",
  },
  {
    time: "1:00 PM",
    title: "Opening Warm-Up",
    details: "Full-group warm-up and event briefing before athletes split into evaluation groups.",
  },
  {
    time: "1:20 PM",
    title: "Station Block 1",
    details: "Initial evaluation block for testing, skill work, and position-specific reps.",
  },
  {
    time: "2:00 PM",
    title: "Station Block 2",
    details: "Competition-driven reps with quick transitions between featured areas.",
  },
  {
    time: "2:40 PM",
    title: "Final Showcase Window",
    details: "Last evaluation period and closing opportunities for live reps.",
  },
  {
    time: "3:00 PM",
    title: "Coach Wrap-Up",
    details: "Dismissal, recruiting conversations, and final operational reset.",
  },
  {
    time: "12:50 PM",
    title: "Coach Huddle",
    details: "Lead coaches confirm whistle cadence, school placement, and field transitions.",
  },
];

export const drillGroups = [
  "Athletic testing",
  "Skill position work",
  "Bigs evaluation",
  "Competition periods",
];

export const rotations: RotationGroup[] = [
  {
    team: "Timpview",
    stations: ["Testing", "Skill Grid", "Competition Field", "Recovery"],
  },
  {
    team: "Lone Peak",
    stations: ["Skill Grid", "Bigs Pod", "Testing", "Competition Field"],
  },
  {
    team: "Springville",
    stations: ["Competition Field", "Recovery", "Skill Grid", "Testing"],
  },
  {
    team: "Skyline",
    stations: ["Bigs Pod", "Testing", "Recovery", "Skill Grid"],
  },
  {
    team: "Westlake",
    stations: ["Recovery", "Competition Field", "Bigs Pod", "Testing"],
  },
  {
    team: "Maple Mountain",
    stations: ["Testing", "Recovery", "Competition Field", "Bigs Pod"],
  },
];
