import Finby from "../Assets/career/finby.jpg";
import IdeaMaker from "../Assets/career/ideamaker.jpg";
import LIQ from "../Assets/career/liq.png";

export const career = [
  {
    Place: "Finby",
    Role: "Designer",
    Description: [
      "Consolidated a new identity that enhanced company external view with clients.",
      "Designed mobile applications with 10k+ views per week and 2M+ downloads.",
      "Lead a team of 4 people that was responsible for every media from the company wich increased partnership with clients and expanded our product to new ones.",
    ],
    From: new Date("2022-03-01"),
    To: new Date("2023-1-20"),
    Image: Finby,
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
