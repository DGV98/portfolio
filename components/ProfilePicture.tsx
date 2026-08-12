import Image from "next/image";
import sunglasses from "../public/sunglasses.svg";

const ProfilePicture = () => {
  return (
    <div className="group relative">
      <Image
        src="/profile.png"
        alt="Picture of the author"
        width={400}
        height={400}
        className=""
        loading="eager"
      />
      <Image
        src={sunglasses}
        alt={"sunglasses"}
        className="absolute top-0 left-32 m-0 -rotate-8 p-0 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-26 group-hover:opacity-100 lg:left-32 lg:group-hover:translate-y-26"
        width={120}
        height={170}
      />
    </div>
  );
};

export default ProfilePicture;
