import { SiJavascript, SiCss3, SiHtml5, SiReact, SiRedux, SiJest, SiDocker, SiMysql, SiNodedotjs, SiVisualstudiocode, SiGithub, SiGit, SiTrello } from "react-icons/si";
import { MdOutlineMobileFriendly, MdCode } from "react-icons/md";
const clSkills = "text-3xl text-white min-w-full md:text-4xl xl:text-5xl"

const skills = [
  {
    img: <SiJavascript className={clSkills} />,
    name: "JavaScript",
  },
  {
    img: <SiHtml5 className={clSkills} />,
    name: "HTML",
  },
  {
    img: <SiCss3 className={clSkills} />,
    name: "CSS",
  },
  {
    img: <SiReact className={clSkills} />,
    name: "React",
  },
  {
    img: <SiRedux className={clSkills} />,
    name: "Redux",
  },
  {
    img: <SiJest className={clSkills} />,
    name: "Jest",
  },
  {
    img: <SiDocker className={clSkills} />,
    name: "Docker",
  },
  {
    img: <SiMysql className={clSkills} />,
    name: "SQL",
  },
  {
    img: <SiNodedotjs className={clSkills} />,
    name: "Node.js",
  },
  {
    img: <SiVisualstudiocode className={clSkills} />,
    name: "VS Code",
  },
  {
    img: <SiGithub className={clSkills} />,
    name: "GitHub",
  },
  {
    img: <SiGit className={clSkills} />,
    name: "Git",
  },
  {
    img: <SiTrello className={clSkills} />,
    name: "Agile",
  },
  {
    img: <MdOutlineMobileFriendly className={clSkills} />,
    name: "Responsive Web",
  },
  {
    img: <MdCode className={clSkills} />,
    name: "Command Line",
  },
]

export default skills;