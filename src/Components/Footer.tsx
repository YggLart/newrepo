import { ReactComponent as GitHubIcon } from "../Assets/UI/github.svg";
import { ReactComponent as InstagramIcon } from "../Assets/UI/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/UI/linkedin.svg";
import { ReactComponent as TiktokIcon } from "../Assets/UI/tiktok.svg";

import { contacts } from "../Data/contacts";

export const Footer = () => {
  const {
    Contact: { GitHub },
    Social,
  } = contacts;
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer gap-6 footer-center p-10 bg-primary text-primary-content">
      <div>
        <h1 className="font-extrabold text-5xl">YG</h1>
        <p className="font-bold">Designer & Developer</p>
        <p>Copyright © {year} - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col">
          <a
            href={GitHub.Link}
            className="outline outline-1 outline-transparent hover:bg-neutral p-4 flex items-center justify-center hover:text-primary duration-300"
          >
            <GitHub.Icon className="w-6" />
          </a>
          {Social.map((soc) => {
            const { Link, Icon } = soc;

            return (
              <a
                href={Link}
                className="outline outline-1 outline-transparent hover:bg-neutral p-4 flex items-center justify-center hover:text-primary duration-300"
              >
                <Icon className="w-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
