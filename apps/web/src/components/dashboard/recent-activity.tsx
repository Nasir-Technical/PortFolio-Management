const activities = [
  {
    title: "Website redesign completed",
    project: "Corporate Website",
    time: "2 hours ago",
    icon: "✓",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "New project created",
    project: "Mobile Banking App",
    time: "5 hours ago",
    icon: "+",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Project status updated",
    project: "E-commerce Platform",
    time: "Yesterday",
    icon: "↻",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "New client added",
    project: "John Smith",
    time: "Yesterday",
    icon: "👤",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates from your portfolio.
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
        {activities.map((activity) => (
          <div
            key={`${activity.title}-${activity.time}`}
            className="flex items-start gap-4"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-semibold ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900">
                {activity.title}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {activity.project}
              </p>
            </div>

            <span className="whitespace-nowrap text-xs text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
