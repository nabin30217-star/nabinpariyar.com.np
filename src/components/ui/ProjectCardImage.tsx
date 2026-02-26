import { CodeIcon } from "@/components/ui/Icons";

interface ProjectCardImageProps {
  projectId: string;
  className?: string;
}

interface ProjectVisual {
  gradient: string;
  accentColor: string;
  icon: React.ReactNode;
  label: string;
}

const projectVisuals: Record<string, ProjectVisual> = {
  "smart-calculator": {
    gradient: "from-blue-600 via-cyan-500 to-blue-400",
    accentColor: "text-blue-300",
    label: "Smart Calculator",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  vixit: {
    gradient: "from-purple-600 via-pink-500 to-purple-400",
    accentColor: "text-purple-300",
    label: "Vixit Studio",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  "samsung-tv-remote": {
    gradient: "from-green-600 via-emerald-500 to-green-400",
    accentColor: "text-green-300",
    label: "TV Remote",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  paperly: {
    gradient: "from-orange-600 via-amber-500 to-orange-400",
    accentColor: "text-orange-300",
    label: "Paperly",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  portfolio: {
    gradient: "from-indigo-600 via-blue-500 to-indigo-400",
    accentColor: "text-indigo-300",
    label: "Portfolio",
    icon: <CodeIcon className="h-8 w-8" />,
  },
};

function PhoneMockup({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-36 w-[4.5rem] overflow-hidden rounded-xl border-2 border-white/20 bg-black/40 shadow-lg">
        <div className="flex h-4 items-center justify-between px-1.5">
          <div className="h-1 w-3 rounded-full bg-white/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-1 pb-2 pt-1">
          <div className={`${visual.accentColor} mb-1.5`}>
            {visual.icon}
          </div>
          <div className="w-full space-y-1">
            <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
            <div className="mx-auto h-1 w-8 rounded-full bg-white/10" />
            <div className="mx-auto h-1 w-6 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

function BrowserMockup({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-28 w-44 overflow-hidden rounded-lg border-2 border-white/20 bg-black/40 shadow-lg">
        <div className="flex h-5 items-center gap-1 border-b border-white/10 px-2">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
          <div className="ml-2 h-2 flex-1 rounded-sm bg-white/10" />
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <div className={`${visual.accentColor} mb-2`}>
            <CodeIcon className="h-6 w-6" />
          </div>
          <div className="w-full space-y-1">
            <div className="mx-auto h-1 w-20 rounded-full bg-white/20" />
            <div className="mx-auto h-1 w-16 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCardImage({ projectId, className = "" }: ProjectCardImageProps) {
  const visual = projectVisuals[projectId];
  if (!visual) return null;

  const isWeb = projectId === "portfolio";

  return (
    <div className={`mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br ${visual.gradient} opacity-80 ${className}`}>
      {isWeb ? <BrowserMockup visual={visual} /> : <PhoneMockup visual={visual} />}
    </div>
  );
}
