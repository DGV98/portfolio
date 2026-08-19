import Image from "next/image";
import sunglasses from "../public/sunglasses.svg";

const ProfilePicture = () => {
  return (
    <div className="group relative">
      <Image
        src="/profile.png"
        alt="Picture of the author"
        width={250}
        height={250}
        className="rounded-full"
        loading="eager"
      />
      <Image
        src={sunglasses}
        alt={"sunglasses"}
        className="absolute top-0 left-19.5 m-0 -rotate-8 p-0 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-16 group-hover:opacity-100"
        width={77.5}
        height={50}
      />
    </div>
  );
};

export default ProfilePicture;
