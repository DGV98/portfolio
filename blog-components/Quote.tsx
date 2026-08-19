import { ReactNode } from "react";

const Quote = (q: string) => {
  return <h1 className="flex w-full items-center p-8 text-4xl italic">{q}</h1>;
};

export default Quote;
