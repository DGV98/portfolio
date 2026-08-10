import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="mt-8 h-auto pl-8 lg:absolute lg:ml-[37.5%] lg:w-full">
      <Link href="/" className="font-terminal text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
