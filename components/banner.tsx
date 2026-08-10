import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="mt-4 flex h-24 justify-center px-4 lg:absolute lg:z-10 lg:w-full lg:justify-end">
      <Link href="/" className="font-terminal text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
