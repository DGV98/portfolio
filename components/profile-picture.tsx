import Image from "next/image";
import sunglasses from "../public/sunglasses.svg";

const ProfilePicture = () => {
  return (
    <div className="group relative">
      <Image
        src="/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
        className=""
      />
      <Image
        src={sunglasses}
        alt={"sunglasses"}
        className="invisible absolute top-0 left-37.5 m-0 -rotate-8 p-0 transition-all duration-200 ease-in group-hover:visible group-hover:translate-y-30"
        width={170}
        height={210}
      />
    </div>
  );
};

export default ProfilePicture;
