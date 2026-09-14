import { Profile } from "@/types";
import { SocialLinks } from "./SocialLinks";
import ProfilePicture from "./ProfilePicture";
import Banner from "./Banner";

export function ProfileSection({ profile }: { profile: Profile }) {
  return (
    <aside className="flex flex-col items-center gap-4 p-4 text-center">
      <Banner />
      <div className="flex flex-col items-center gap-4 p-4 text-center xl:flex xl:h-full xl:flex-col xl:items-center xl:justify-center xl:gap-6 xl:text-center">
        <ProfilePicture />

        <div className="space-y-2">
          <h1 className="text-foreground text-2xl font-bold">{profile.name}</h1>
          <p className="text-accent text-sm font-semibold xl:text-base">
            {profile.title}
          </p>
          <p className="text-muted text-sm font-semibold xl:text-base">
            {profile.location}
          </p>
        </div>
        <p className="text-muted max-w-sm text-sm leading-relaxed">
          {profile.bio}
        </p>

        <SocialLinks links={profile.socialLinks} />
      </div>
    </aside>
  );
}
