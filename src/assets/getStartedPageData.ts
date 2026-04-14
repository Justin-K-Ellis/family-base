import type { GetStartedCardData } from "../types/GetStartedCardData";

export const getStartedPageData: GetStartedCardData[] = [
  {
    id: 1,
    text: "Join a Base",
    description: "Enter your code to join a base.",
    icon: "➡️",
    url: "./join",
  },
  {
    id: 2,
    text: "Create a Base",
    description: "Make a new base.",
    icon: "➕",
    url: "./create",
  },
];
