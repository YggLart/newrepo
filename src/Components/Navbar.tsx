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
        <div className="hidden md:flex">
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
        </div>

        <a
          href={Resume.Link}
          className="bg-neutral duration-200 p-5 px-6 hover:bg-primary hover:text-neutral"
        >
          Resume
        </a>

        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="bg-neutral duration-200 p-4 px-6 hover:bg-primary hover:text-neutral"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 text-lg w-screen text-center"
          >
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
          </ul>
        </div>
      </div>
    </div>
  );
};
