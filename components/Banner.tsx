import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col text-right font-mono text-4xl font-bold">
      <Link href="/" className="text-banner cursor-pointer">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
    </div>
  );
};

export default Banner;
