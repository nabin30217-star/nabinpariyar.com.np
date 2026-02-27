import Image from "next/image";

interface ProjectCardImageProps {
  projectId: string;
  className?: string;
}

interface ProjectVisual {
  gradient: string;
  imagePath: string;
}

const projectVisuals: Record<string, ProjectVisual> = {
  "smart-calculator": {
    gradient: "from-blue-600/30 via-cyan-500/20 to-blue-400/10",
    imagePath: "/images/projects/smart-calculator.png",
  },
  vixit: {
    gradient: "from-purple-600/30 via-pink-500/20 to-purple-400/10",
    imagePath: "/images/projects/vixit.png",
  },
  "samsung-tv-remote": {
    gradient: "from-green-600/30 via-emerald-500/20 to-green-400/10",
    imagePath: "/images/projects/samsung-tv-remote.png",
  },
  paperly: {
    gradient: "from-orange-600/30 via-amber-500/20 to-orange-400/10",
    imagePath: "/images/projects/paperly.png",
  },
  portfolio: {
    gradient: "from-indigo-600/30 via-blue-500/20 to-indigo-400/10",
    imagePath: "/images/projects/portfolio.png",
  },
};

export default function ProjectCardImage({ projectId, className = "" }: ProjectCardImageProps) {
  const visual = projectVisuals[projectId];
  if (!visual) return null;

  return (
    <div
      className={`group/img relative mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${visual.gradient} p-6 ${className}`}
    >
      <Image
        src={visual.imagePath}
        alt={projectId.replace(/-/g, " ")}
        width={200}
        height={200}
        className="h-24 w-24 rounded-2xl object-contain shadow-lg transition-transform duration-500 group-hover/img:scale-110"
      />
    </div>
  );
}
