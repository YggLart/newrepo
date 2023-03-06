import { education } from "../Data/education";
import { getMonthYear } from "../Helpers/Date";

export const Education = () => {
  const { Graduations, Courses } = education;

  const Graduation = () => {
    return (
      <section className="grid md:grid-cols-2 gap-4">
        {Graduations.map((grad) => {
          const { Place, Course, From, To, Image } = grad;
          const FromDate = getMonthYear(From);
          const ToDate = getMonthYear(To);

          return (
            <article className="flex flex-col sm:justify-start sm:flex-row items-center p-4 outline outline-1 outline-gray-700 gap-4">
              <img src={Image} alt={Place} className="w-24" />
              <div className="grid gap-2">
                <span className="justify-center sm:justify-start flex items-center">
                  {Place}
                </span>
                <span className="justify-center sm:justify-start flex items-center text-primary gap-4">
                  {Course}{" "}
                  <span className="text-gray-500 italic">Bachelor</span>
                </span>
                <span className="justify-center sm:justify-start flex items-center opacity-80">
                  {FromDate} - {ToDate}
                </span>
              </div>
            </article>
          );
        })}
      </section>
    );
  };

  const Course = () => {
    return (
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Courses.map((cour) => {
          const { Place, Course, Image } = cour;

          return (
            <div
              className="collapse collapse-arrow h-fit outline outline-1 outline-gray-700 hover:outline-primary duration-300 cursor-pointer hover:text-primary"
              tabIndex={0}
            >
              <article className="flex p-4 gap-4">
                <img src={Image} alt={Place} className="w-16 h-16" />
                <span className="justify-center sm:justify-start flex items-center">
                  {Place}
                </span>
              </article>
              <div className="collapse-content">
                {Course.map((course) => {
                  return <p className="py-1 text-gray-300">{course}</p>;
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <section className="bg-neutral w-screen grid justify-center" id="Education">
      <div className="max-w-7xl w-screen sm:h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] grid items-center">
        <div className="p-8 grid gap-8">
          <h1 className="text-5xl font-thin">Education</h1>
          <Graduation />
          <div className="divider"></div>
          <h1 className="text-5xl font-thin">Courses</h1>
          <Course />
        </div>
      </div>
    </section>
  );
};
