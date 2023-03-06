import AnhembiMorumbi from "../Assets/education/anhembimorumbi.jpg";
import CursoEmVideo from "../Assets/education/cursoemvideo.png";
import Scrimba from "../Assets/education/scrimba.png";
import SelfTaught from "../Assets/education/selftaught.jpg";
import Udemy from "../Assets/education/udemy.jpg";

export const education = {
  Graduations: [
    {
      Place: "Anhembi Morumbi University",
      Course: "Computer Science",
      From: new Date("2023-02-01"),
      To: new Date("2027-12-20"),
      Image: AnhembiMorumbi,
    },
    {
      Place: "Anhembi Morumbi University",
      Course: "Design",
      From: new Date("2014-02-01"),
      To: new Date("2018-12-20"),
      Image: AnhembiMorumbi,
    },
  ],
  Courses: [
    {
      Place: "Self Taught",
      Course: ["TypeScript", "NodeJs", "TailwindCSS", "Git", "GitHub"],
      Image: SelfTaught,
    },
    {
      Place: "Udemy",
      Course: ["HTML5 / CSS3", "JavaScript", "Node.JS", "React"],
      Image: Udemy,
    },
    {
      Place: "Curso em Vídeo",
      Course: ["HTML5 / CSS3", "JavaScript"],
      Image: CursoEmVideo,
    },
    {
      Place: "Scrimba",
      Course: ["Clean Code"],
      Image: Scrimba,
    },
  ],
};
