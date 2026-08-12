import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="border-border shrink-0 border-b lg:fixed lg:flex lg:h-screen lg:w-1/4 lg:border-r lg:border-b-0">
          <ProfileSection profile={profile} />
        </div>

        {/* Main content */}
        <main className="flex-1 lg:ml-[25%] lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-auto lg:pr-40">
          <section
            id="experience"
            className="flex items-center justify-center px-6 py-8 sm:px-10 lg:min-h-screen lg:snap-center lg:py-16"
          >
            <div className="mx-auto w-full max-w-3xl">
              <ExperienceSection entries={experience} />
            </div>
          </section>

          <section
            id="projects"
            className="flex items-center justify-center px-6 py-8 sm:px-10 lg:min-h-screen lg:snap-center lg:py-16"
          >
            <div className="mx-auto w-full max-w-3xl">
              <ProjectsSection projects={projects} />
            </div>
          </section>

          <section
            id="publications"
            className="flex items-center justify-center px-6 py-8 sm:px-10 lg:min-h-screen lg:snap-center lg:py-16"
          >
            <div className="mx-auto w-full max-w-3xl">
              <PublicationsSection publications={publications} />
            </div>
          </section>
        </main>

        {/* Scroll Navigation */}
        <ScrollNavigation />
      </div>
    </div>
  );
}
