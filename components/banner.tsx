import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="mt-4 flex h-auto w-full justify-center pl-8 lg:absolute lg:mt-8 lg:justify-end lg:pr-8">
      <Link href="/" className="font-terminal text-3xl lg:text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
