import { Sidebar } from "@/components/sidebar";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="shrink-0 border-b border-border lg:fixed lg:h-screen lg:w-80 lg:border-b-0 lg:border-r xl:w-96">
        <Sidebar profile={profile} />
      </div>

      {/* Main content */}
      <main className="flex-1 lg:ml-80 xl:ml-96">
        <div className="mx-auto max-w-3xl space-y-16 px-6 py-12 sm:px-10 lg:py-16">
          <ExperienceSection entries={experience} />
          <ProjectsSection projects={projects} />
          <PublicationsSection publications={publications} />
        </div>
      </main>
    </div>
  );
}
