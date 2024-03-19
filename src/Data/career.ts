import Concentrix from "../Assets/career/concentrix.jpg";
import IdeaMaker from "../Assets/career/ideamaker.jpg";
import LIQ from "../Assets/career/liq.png";
import PAK from "../Assets/career/pak.jpeg"

export const career = [
  {
    Place: "Concentrix",
    Role: "IT Analist",
    Description: [
      "As an IT analyst, I utilized Jira and other tools for efficient project management.",
      "Tracking tasks and coordinating with teams, these tools were crucial for streamlined workflows and timely deliveries, highlighting the impact of technology on operational success.",
    ],
    From: new Date("2023-02-01"),
    To: new Date("2024-2-20"),
    Image: Concentrix,
  },
  {
    Place: "Planned Acts of Kindness",
    Role: "Web Developer",
    Description: [
      "Actively contributed to the expansion of their global impact by developing pages on WordPress.",
      "Through my efforts, I crafted user-friendly and engaging web pages that effectively conveyed the organization’s mission and showcased the transformative acts of kindness they initiated world-wide.",
      "These pages served as a powerful tool for spreading awareness and garnering support, fostering a sense of community around the shared goal of making a positive difference in people’s lives.",
      "It was a fulfilling experience to leverage my skills to amplify the reach of an organization dedicated to benevolence and kindness on a global scale."
    ],
    From: new Date("2022-11-01"),
    To: new Date("2024-2-20"),
    Image: PAK,
  },
  {
    Place: "Idea Maker",
    Role: "Lead Designer",
    Description: [
      "Consolidated a new identity that enhanced company external view with clients.",
      "Designed mobile applications with 10k+ views per week and 2M+ downloads.",
      "Lead a team of 4 people that was responsible for every media from the company wich increased partnership with clients and expanded our product to new ones.",
    ],
    From: new Date("2020-03-01"),
    To: new Date("2022-10-20"),
    Image: IdeaMaker,
  },
  {
    Place: "LIQ",
    Description: [
      "As a bilingual support analyst, I offered top-notch technical support in English and Portuguese, solving technical problems and assisting users with their needs. I have advanced skills in operating systems, productivity applications and hardware support, and I work with incident management tools to ensure speed and accuracy.",
      "I also had experience in user training, how-to documents and support project management. With strong interpersonal skills, I am able to establish positive relationships with users and work in teams with other analysts to provide exceptional support service.",
    ],
    Role: "Bilingual Tech Support",
    From: new Date("2017-03-01"),
    To: new Date("2019-11-20"),
    Image: LIQ,
  },
];
