// import type { LucideIcon } from "lucide-react";

// type StatCardProps = {
//   title: string;
//   value: string;
//   change: string;
//   icon: LucideIcon;
//   positive?: boolean;
// };

// export function StatCard({
//   title,
//   value,
//   change,
//   icon: Icon,
//   positive = true,
// }: StatCardProps) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>

//           <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
//             {value}
//           </p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
//           <Icon className="h-5 w-5" />
//         </div>
//       </div>

//       <div className="mt-4">
//         <span
//           className={
//             positive
//               ? "text-sm font-medium text-green-600"
//               : "text-sm font-medium text-red-600"
//           }
//         >
//           {change}
//         </span>

//         <span className="ml-2 text-sm text-gray-500">
//           from last month
//         </span>
//       </div>
//     </div>
//   );
// }

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
  color?: "blue" | "green" | "purple" | "orange";
}

const colorStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
};

export default function StatCard({
  title,
  value,
  description,
  icon,
  color = "blue",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
            colorStyles[color]
          }`}
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}
