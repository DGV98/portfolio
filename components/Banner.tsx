import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col text-right text-4xl font-bold 2xl:text-5xl">
      <Link href="/" className="text-banner cursor-pointer">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
    </div>
  );
};

export default Banner;
