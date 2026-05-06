export type FieldLayoutItem = {
  label: string;
  description: string;
};

export const fieldLayouts = {
  positionGroups: [
    {
      label: "Quarterbacks / Receivers",
      description: "Timing and ball placement work on the east skill field.",
    },
    {
      label: "Defensive Backs / Linebackers",
      description: "Backpedal, break, and pursuit reps on the north grid.",
    },
    {
      label: "Running Backs / Tight Ends",
      description: "Footwork, route releases, and pass-catch periods in the middle lane.",
    },
  ] satisfies FieldLayoutItem[],
  skillGroups: [
    {
      label: "Testing Alley",
      description: "Forty, shuttle, broad jump, and verified measurement station.",
    },
    {
      label: "1-on-1 Skill Grid",
      description: "Press, release, and finish reps for perimeter athletes.",
    },
    {
      label: "7v7 Competition Field",
      description: "Structured team offense-versus-defense evaluation with scripted reps.",
    },
  ] satisfies FieldLayoutItem[],
  bigs: [
    {
      label: "Bigs Pod",
      description: "OL/DL stance, hand placement, leverage, and drive work.",
    },
    {
      label: "Bag Circuit",
      description: "Short-area movement and redirection drills for trench athletes.",
    },
    {
      label: "Mirror Lane",
      description: "Pass-set and counter-response station for isolated evaluation.",
    },
  ] satisfies FieldLayoutItem[],
};
