import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="absolute z-10 mt-4 flex h-24 w-full px-4">
      <Link href="/" className="font-terminal text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
