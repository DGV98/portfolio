import Link from "next/link";

// TODO: Banner for blogs
const Banner = () => {
  return (
    <nav className="">
      <Link href="/" className="font-terminal text-3xl lg:text-4xl">
        hellodavid<span className="text-accent">.dev</span>
      </Link>
      <div></div>
    </nav>
  );
};

export default Banner;
