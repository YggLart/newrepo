const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getAge = (today: Date, birthday: Date): number => {
  const diffInMs = today.getTime() - birthday.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
  const age = Math.round(diffInYears * 100) / 100;
  return Math.floor(age);
};

export const getMonthYear = (date: Date): string => {
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month}/${year}`;
};
