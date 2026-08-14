import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <div className="font-terminal flex flex-col text-right text-3xl font-bold xl:text-4xl 2xl:text-5xl">
      <Link href="/" className="text-banner">
        <p className="font-terminal text-banner">hellodavid</p>
        <p className="font-terminal text-accent">.dev</p>
      </Link>
    </div>
  );
};

export default Banner;
