import { useState } from "react";
import { ReactComponent as BehanceIcon } from "../Assets/UI/behance.svg";
import { ReactComponent as GithubIcon } from "../Assets/UI/github.svg";
import { project, ProjectTypes } from "../Data/project";

export const Project = () => {
  const [showProjects, setShowProjects] = useState(project.slice(0, 3));
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (!showMore) setShowProjects(project);
    else setShowProjects(project.slice(0, 3));

    setShowMore(!showMore);
  };

  type CardProps = {
    Data: ProjectTypes;
  };

  const Card = ({ Data }: CardProps) => {
    const { Thumbnail, Name, Description, Tags, GitHub, Behance, Link } = Data;
    const haveBehance = Behance !== "";
    const isLinkEmpty = Link === "";

    return (
      <div className="outline outline-1 outline-gray-700 hover:outline-primary duration-300 shadow-xl flex flex-col justify-between">
        <div>
          <figure>
            <img src={Thumbnail} alt={Name} />
          </figure>

          <div className="p-6 grid gap-4 min-w-[132px]">
            <h2 className="card-title text-primary">{Name}</h2>
            <p className="">{Description}</p>
          </div>
        </div>

        <div className="px-6 pb-6 gap-2 flex flex-wrap select-none">
          {Tags.map((tag) => {
            return (
              <span className="p-3 badge bg-base-100 hover:scale-125">
                {tag}
              </span>
            );
          })}
        </div>

        <div className="flex justify-between bg-base-100">
          <div className="flex">
            <a
              href={GitHub}
              className="w-6 box-content p-2 px-4 duration-300 hover:bg-primary hover:text-neutral flex items-center justify-center"
            >
              <GithubIcon />
            </a>
            {haveBehance && (
              <a
                href={Behance}
                className="w-6 box-content p-2 px-4 duration-300 hover:bg-primary hover:text-neutral flex items-center justify-center"
              >
                <BehanceIcon />
              </a>
            )}
          </div>
          {isLinkEmpty ? (
            <a
              href="#Projects"
              className="cursor-default p-4 bg-neutral duration-300 text-gray-500 font-bold"
            >
              Comming Soon!
            </a>
          ) : (
            <a
              href={Link}
              className="p-4 bg-base-300 duration-300 hover:bg-primary hover:text-neutral font-bold"
            >
              See it Live →
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-neutral w-screen grid justify-center" id="Projects">
      <div className="max-w-7xl w-screen sm:min-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] grid items-center">
        <div className="p-8 grid gap-8">
          <h1 className="text-5xl font-thin">Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {showProjects.map((data) => {
              return <Card Data={data} />;
            })}
          </div>
          <button
            className="p-4 w-full bg-base-100 btn rounded-none hover:bg-primary hover:text-neutral"
            onClick={handleClick}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};
