interface ProjectCardProps {
  name: string;
  description: string;
  client: string;
  status: "Completed" | "In Progress" | "Planning";
  category: string;
  progress: number;
}

const statusStyles = {
  Completed: "bg-green-50 text-green-700",
  "In Progress": "bg-blue-50 text-blue-700",
  Planning: "bg-orange-50 text-orange-700",
};

export default function ProjectCard({
  name,
  description,
  client,
  status,
  category,
  progress,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <span className="text-4xl font-bold text-white/80">
          {name.charAt(0)}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {category}
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {name}
            </h2>
          </div>

          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">
              Progress
            </span>

            <span className="text-xs font-semibold text-slate-700">
              {progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-900 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Client</p>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {client}
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            View →
          </button>
        </div>
      </div>
    </article>
  );
}
