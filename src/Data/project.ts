import AngularBlog from "../Assets/projects/angularblog.png";
import AngularBuzzfeed from "../Assets/projects/angularbuzzfeed.png";
import FGInputTranslator from "../Assets/projects/fginputtranslator.png";
import JSPokedex from "../Assets/projects/jspokedex.png";
import ToDo from "../Assets/projects/todo.png";
import YggXIV from "../Assets/projects/yggxiv.png";

export interface ProjectTypes {
  Thumbnail: string;
  Name: string;
  Description: string;
  Tags: string[];
  GitHub: string;
  Behance: string;
  Link: string;
}

export const project = [
  {
    Thumbnail: FGInputTranslator,
    Name: "Fight Game Input Translator",
    Description: "App that converts numeral inputs into visual inputs.",
    Tags: ["React", "JavaScript", "Tailwind CSS", "React Router"],
    GitHub: "https://github.com/ygg-m/fg-input-translator",
    Behance: "",
    Link: "https://ygg-m.github.io/fg-input-translator/",
  },
  {
    Thumbnail: YggXIV,
    Name: "Ygg XIV",
    Description:
      "Get data from xivapi.com and oprganize it to show ranking, stats and more about Guilds and Characters from Final Fantasy XIV.",
    Tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    GitHub: "https://github.com/ygg-m/yggxiv",
    Behance: "",
    Link: "",
  },
  {
    Thumbnail: JSPokedex,
    Name: "Pokédex",
    Description: "Get data from PokéAPI to create a dinamic Pokédex.",
    Tags: ["JavaScript", "HTML", "CSS"],
    GitHub: "https://github.com/ygg-m/js-pokedex",
    Behance: "",
    Link: "https://ygg-m.github.io/js-pokedex/",
  },
  {
    Thumbnail: ToDo,
    Name: "To-Do App",
    Description: "Simple To-Do App to track your goals.",
    Tags: ["JavaScript", "HTML", "CSS"],
    GitHub: "https://github.com/ygg-m/to-do-app",
    Behance: "",
    Link: "https://ygg-m.github.io/to-do-app/",
  },
  {
    Thumbnail: AngularBlog,
    Name: "Angular Blog",
    Description:
      "Fun project made in Angular with the objective of learning more about the Framework.",
    Tags: ["Angular", "TypeScript"],
    GitHub: "https://github.com/ygg-m/angular-blog",
    Behance: "",
    Link: "https://ygg-m.github.io/angular-blog/",
  },
  {
    Thumbnail: AngularBuzzfeed,
    Name: "Angular Buzzfeed",
    Description:
      "Fun project made in Angular with the objective of learning more about the Framework.",
    Tags: ["Angular", "TypeScript"],
    GitHub: "https://github.com/ygg-m/angular-buzzfeed",
    Behance: "",
    Link: "https://angular-buzzfeed.netlify.app/",
  },
];
