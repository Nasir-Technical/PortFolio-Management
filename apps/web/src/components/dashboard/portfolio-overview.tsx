const projects = [
  {
    name: "Corporate Website",
    client: "Acme Corporation",
    status: "Completed",
    progress: 100,
    color: "bg-green-500",
  },
  {
    name: "Mobile Banking App",
    client: "FinTech Ltd.",
    status: "In Progress",
    progress: 72,
    color: "bg-blue-500",
  },
  {
    name: "E-commerce Platform",
    client: "ShopHub",
    status: "In Progress",
    progress: 48,
    color: "bg-orange-500",
  },
  {
    name: "Brand Identity",
    client: "Creative Studio",
    status: "Completed",
    progress: 100,
    color: "bg-green-500",
  },
];

export default function PortfolioOverview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Portfolio Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your latest projects and progress.
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          View all
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {project.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {project.client}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  project.status === "Completed"
                    ? "bg-green-50 text-green-700"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <span className="w-10 text-right text-xs font-medium text-slate-500">
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
