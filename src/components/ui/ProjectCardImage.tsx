import Image from "next/image";

interface ProjectCardImageProps {
  projectId: string;
  imageUrl?: string;
  className?: string;
}

// Gradient backgrounds keyed by appId
const gradientMap: Record<string, string> = {
  "smartcalculator.calculators": "from-blue-600/30 via-cyan-500/20 to-blue-400/10",
  "com.vixit.studio.converter": "from-purple-600/30 via-pink-500/20 to-purple-400/10",
  "com.smart.samtvremote": "from-green-600/30 via-emerald-500/20 to-green-400/10",
  "com.paperly.pdfscanner": "from-orange-600/30 via-amber-500/20 to-orange-400/10",
  "com.universaltv.remotetv": "from-rose-600/30 via-red-500/20 to-rose-400/10",
};

const defaultGradient = "from-zinc-700/30 via-zinc-600/20 to-zinc-500/10";

export default function ProjectCardImage({ projectId, imageUrl, className = "" }: ProjectCardImageProps) {
  // If no image URL at all, don't render anything
  if (!imageUrl) return null;

  const gradient = gradientMap[projectId] || defaultGradient;

  return (
    <div
      className={`group/img relative mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 ${className}`}
    >
      <Image
        src={imageUrl}
        alt={projectId.replace(/\./g, " ")}
        width={200}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-24 w-24 rounded-2xl object-contain shadow-lg transition-transform duration-500 group-hover/img:scale-110"
      />
    </div>
  );
}
