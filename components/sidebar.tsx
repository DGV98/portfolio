import { Profile } from "@/types";
import Image from "next/image";
import { SocialLinks } from "./social-links";

export function Sidebar({ profile }: { profile: Profile }) {
  return (
    <aside className="flex flex-col items-center gap-6 px-8 py-12 text-center lg:justify-self-center">
      {/* Placeholder avatar */}
      <Image
        src="/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-md font-medium text-accent">{profile.title}</p>
        <p className="text-sm text-muted tracking-widest font-semibold">
          {profile.location} • {profile.degree}
        </p>
      </div>

      <p className="max-w-sm text-md leading-relaxed text-muted">
        {profile.bio}
      </p>

      <SocialLinks links={profile.socialLinks} />
    </aside>
  );
}

// import React from "react";

// const AlternateSidebar = () => {
//   return (
//     <div className="bg-slate-900 min-h-125 flex items-center justify-center p-8">
//       <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 items-center">
//         {/* Image Section */}
//         <div className="w-full md:w-1/3 relative">
//           {/* Abstract Glow behind image */}
//           <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30"></div>
//           <Image
//             src="/profile.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full md:w-2/3 text-left space-y-4">
//           <h1 className="text-5xl font-bold text-white tracking-tight">
//             David Gonzalez-Velez
//           </h1>

//           <p className="text-xl text-cyan-400 font-medium">
//             Software Engineer & Researcher
//           </p>

//           <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
//             Chicago, IL • B.S. Molecular Engineering (Quantum)
//           </div>

//           <p className="text-slate-300 leading-relaxed max-w-2xl text-lg">
//             Hi, I am a self-taught software engineer with a passion for{" "}
//             <span className="text-white font-medium">quantum computation</span>{" "}
//             and the computers of tomorrow. I bridge the gap between classical
//             engineering and quantum mechanics.
//           </p>

//           {/* Social Icons Row */}
//           <div className="flex gap-4 pt-4">
//             <a
//               href="#"
//               className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition"
//             >
//               {/* GitHub Icon */}
//             </a>
//             <a
//               href="#"
//               className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition"
//             >
//               {/* LinkedIn Icon */}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlternateSidebar;
