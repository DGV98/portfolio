import { Sidebar } from "@/components/sidebar";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { ScrollNavigation } from "@/components/scroll-navigation";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="border-border shrink-0 border-b lg:fixed lg:flex lg:h-screen lg:w-3/8 lg:items-center lg:justify-center lg:border-r lg:border-b-0">
          <Sidebar profile={profile} />
        </div>

        {/* Main content */}
        <main className="flex-1 lg:ml-[37.5%] lg:h-screen lg:snap-y lg:snap-proximity lg:pr-40">
          <section
            id="experience"
            className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:snap-start lg:py-16"
          >
            <div className="mx-auto w-full max-w-3xl">
              <ExperienceSection entries={experience} />
            </div>
          </section>

          <section
            id="projects"
            className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:snap-start lg:py-16"
          >
            <div className="mx-auto w-full max-w-3xl">
              <ProjectsSection projects={projects} />
            </div>
          </section>

          <section
            id="publications"
            className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:snap-start lg:py-16"
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
