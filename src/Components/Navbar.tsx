import { contacts } from "../Data/contacts";

export const Navbar = () => {
  const { Resume } = contacts;
  return (
    <div className="w-full justify-between flex bg-base-100 fixed z-50 border-b border-gray-700">
      <a
        href="#"
        className="text-4xl p-3 flex items-center justify-center px-6 w-fit duration-200 font-bold text-primary hover:bg-primary rounded-none hover:text-neutral"
      >
        YG
      </a>
      <div className="flex items-center">
        <a className="duration-200 hover:bg-neutral p-5" href="#Profile">
          Profile
        </a>
        <a className="duration-200 hover:bg-neutral p-5" href="#Education">
          Education
        </a>
        <a className="duration-200 hover:bg-neutral p-5" href="#Career">
          Experiences
        </a>
        <a className="duration-200 hover:bg-neutral p-5" href="#Projects">
          Projects
        </a>
        <a className="duration-200 hover:bg-neutral p-5" href="#Contact">
          Contact
        </a>
        <a
          href={Resume.Link}
          className="bg-neutral duration-200 p-5 px-6 hover:bg-primary hover:text-neutral"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
