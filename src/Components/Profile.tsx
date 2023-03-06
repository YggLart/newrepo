import { ReactNode } from "react";
import { ProfileData } from "../Data/profile";
import { getAge } from "../Helpers/Date";

export const Profile = () => {
  const {
    Today,
    Picture,
    Personal: { Name, Birthday, City, Country },
    Skills: { Design, Code },
  } = ProfileData;

  const ProfileInfo = () => {
    const Personal = () => {
      const Age = getAge(Today, Birthday);

      return (
        <div className="flex gap-x-4 text-3xl justify-center">
          <div className="flex flex-col w-fit items-end gap-2">
            <span className="uppercase text-right font-thin opacity-70 w-fit">
              Name
            </span>
            <span className="uppercase text-right font-thin opacity-70 w-fit">
              Age
            </span>
            <span className="uppercase text-right font-thin opacity-70 w-fit">
              From
            </span>
          </div>
          <div className="flex flex-col w-fit gap-2">
            <span className="w-fit uppercase font-medium text-primary">
              {Name}
            </span>
            <span className="w-fit uppercase font-medium">{Age} years</span>
            <span className="w-fit uppercase font-medium">{`${City}, ${Country}`}</span>
          </div>
        </div>
      );
    };

    const Quote = () => {
      return (
        <div className="grid justify-center text-center">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-400 dark:text-gray-600 opacity-60"
            viewBox="0 0 24 27"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <div className="italic text-2xl">
            <span className="font-bold text-primary">Designer</span> by heart,{" "}
            <span className="font-bold text-primary">Developer</span> by choice.
          </div>
          <div className="w-full flex justify-end">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-400 dark:text-gray-600 rotate-180 opacity-60"
              viewBox="0 0 24 27"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      );
    };

    const DesignIcon = () => {
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403Z"
            fill="currentColor"
          />
          <path
            d="M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 12.8491 8.48793 12.461 8.46151 12.0915C8.90465 12.4558 9.4275 12.7266 9.99994 12.874V10.5C9.99994 9.67157 10.6715 9 11.4999 9H14.9999C14.9999 6.79086 13.2091 5 10.9999 5C10.0146 5 9.11251 5.35626 8.4154 5.94699C8.24173 5.13337 7.83957 4.53662 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.9999 14.917V19H19.9999V11H16.6585C15.9423 13.0265 14.1683 14.5533 11.9999 14.917ZM14.4648 11H11.9999V12.874C13.0508 12.6035 13.9345 11.9168 14.4648 11Z"
            fill="currentColor"
          />
        </svg>
      );
    };

    const CodeIcon = () => {
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 16L13 8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    };

    interface SkillProps {
      Icon: ReactNode;
      Name: string;
      List: string[];
    }

    const Skill = ({ Icon, Name, List }: SkillProps) => {
      return (
        <div className="grid gap-4">
          <div className="flex flex-col items-center opacity-75">
            <span>{Icon}</span>
            <span>{Name}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {List.map((skill) => {
              return (
                <div className="badge badge-lg bg-primary text-neutral select-none hover:scale-125">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <article className="col-span-3 sm:col-span-2">
        <div className="grid gap-4">
          <Personal />
          <div className="divider"></div>
          <Quote />
          <div className="divider"></div>
          <div className="flex gap-4 pb-4 sm:pb-0">
            <Skill Icon={<DesignIcon />} Name="Design" List={Design} />
            <div className="divider divider-horizontal"></div>

            <Skill Icon={<CodeIcon />} Name="Code" List={Code} />
          </div>
        </div>
      </article>
    );
  };

  const ProfilePicture = () => {
    return (
      <img
        className="grayscale hover:grayscale-[35%] duration-300 object-cover sm:col-span-1 col-span-3 sm:h-full max-h-[744px] w-full h-96"
        src={Picture}
        alt="Profile Picture"
      />
    );
  };
  return (
    <section
      className="sm:h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] max-w-7xl"
      id="Profile"
    >
      <div className="grid grid-cols-3 p-8 h-full gap-4 items-center">
        <ProfileInfo />
        <ProfilePicture />
      </div>
    </section>
  );
};
