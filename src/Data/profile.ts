import ProfilePic from "../Assets/ProfilePic.jpg";

export const ProfileData = {
  Today: new Date(),
  Picture: ProfilePic,
  Personal: {
    Name: "Ygor Goulart",
    Birthday: new Date("1995-08-03"),
    City: "São Paulo",
    Country: "Brazil",
  },
  Skills: {
    Design: [
      "UI/UX",
      "Design System",
      "Web",
      "Mobile",
      "Wireframing",
      "Prototyping",
      "Testing",
    ],
    Code: [
      "React",
      "NodeJS",
      "TypeScript",
      "JavaScript",
      "Git",
      "GitHub",
      "Jester",
      "HTML5",
      "CSS3",
    ],
  },
};
