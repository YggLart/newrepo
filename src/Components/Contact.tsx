import { useState } from "react";
import { contacts } from "../Data/contacts";
import { copyToClipboard } from "../Helpers/copyToClipboard";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const {
    Contact: { Email, Phone, GitHub },
    Social,
  } = contacts;

  const Mail = () => {
    const handleClick = (str: string) => {
      copyToClipboard(str);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    };
    return (
      <button
        className="flex gap-4 items-center justify-center tooltip p-4 outline outline-1 outline-gray-700 hover:text-primary duration-300 hover:outline-primary"
        data-tip={copied ? "Copied!" : "Copy my email to Clipboard"}
        onClick={() => handleClick(Email.Link)}
      >
        <Email.Icon className="w-6" />
        <div>{Email.Link}</div>
      </button>
    );
  };

  const PhoneComponent = () => {
    return (
      <a
        href={Phone.Link}
        className="flex gap-4 items-center justify-center tooltip p-4 outline outline-1 outline-gray-700 hover:text-primary duration-300 hover:outline-primary"
        data-tip="Send me a message in WhatsApp"
      >
        <Phone.Icon className="w-6" />
        {Phone.Name}
      </a>
    );
  };

  return (
    <section className="w-screen grid justify-center" id="Contact">
      <div className="max-w-7xl w-screen sm:h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] grid items-center">
        <div className="p-8 grid gap-8">
          <h1 className="text-5xl font-thin">Reach me out!</h1>
          <div className="grid sm:grid-cols-2 gap-4">
            <Mail />
            <a
              href={Phone.Link}
              className="flex gap-4 items-center justify-center tooltip p-4 outline outline-1 outline-gray-700 hover:text-primary duration-300 hover:outline-primary"
              data-tip="Send me a message in WhatsApp"
            >
              <Phone.Icon className="w-6" />
              {Phone.Name}
            </a>

            <a
              href={GitHub.Link}
              className="sm:col-span-2 outline outline-1 outline-gray-700 p-4 flex items-center justify-center hover:outline-primary hover:text-primary duration-300 text-2xl gap-4"
            >
              <GitHub.Icon className="w-12" /> {GitHub.Name}
            </a>
          </div>

          <div className="divider"></div>

          <div className="flex gap-4 w-full justify-center">
            {Social.map((soc) => {
              const { Link, Icon } = soc;

              return (
                <a
                  href={Link}
                  className="outline outline-1 outline-gray-700 p-4 flex items-center justify-center hover:outline-primary hover:text-primary duration-300"
                >
                  <Icon className="w-12" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
