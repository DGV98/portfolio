import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="mt-8 flex h-auto w-full justify-center pl-8 lg:absolute lg:justify-end lg:pr-8">
      <Link href="/" className="font-terminal text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
