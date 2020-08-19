import Freehold from "../imgs/Freehold.JPG";
import freehold from "../imgs/freehold.gif";
import GameOfLife from "../imgs/GameOfLife.JPG";
import GameOfLifeGif from "../imgs/GameOfLifeGif.gif";

export const ProjectData = [
  {
    Name: "Freehold",
    Image: Freehold,
    Gif: freehold,
    FrontEnd: ["React", "Redux", "Firebase", "SASS"],
    BackEnd: ["Nodejs", "Express", "Firebase", "Postgres", "AWS"],
    ViewFrontEndCode:
      "https://github.com/Lambda-School-Labs/property-manager-fe",
    ViewBackEndCode:
      "https://github.com/Lambda-School-Labs/property-manager-be",
    ViewDemo: "https://freehold.dev",
  },
  {
    Name: "Game Of Life",
    Image: GameOfLife,
    Gif: GameOfLifeGif,
    FrontEnd: ["React", "CSS"],
    BackEnd: ["AWS"],
    ViewFrontEndCode: "https://github.com/dannyotown/react-gameoflife",
    ViewDemo: "https://master.d16u3010j68tep.amplifyapp.com/",
  },
];

export default ProjectData;
