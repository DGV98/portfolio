import { Profile } from "@/types";
import { SocialLinks } from "./social-links";

export function Sidebar({ profile }: { profile: Profile }) {
  return (
    <aside className="flex flex-col items-center gap-6 px-8 py-12 text-center lg:justify-self-center">
      {/* Placeholder avatar */}
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-card text-2xl font-bold text-muted">
        {profile.initials}
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-md font-medium text-accent">{profile.title}</p>
      </div>

      <p className="max-w-sm text-md leading-relaxed text-muted">
        {profile.bio}
      </p>

      <SocialLinks links={profile.socialLinks} />
    </aside>
  );
}
