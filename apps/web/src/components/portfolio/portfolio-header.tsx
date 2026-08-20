"use client";

import { useState } from "react";

export default function PortfolioHeader() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Portfolio
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage and showcase your projects.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 sm:w-64"
          />
        </div>

        <button
          type="button"
          className="h-11 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          + Add Project
        </button>
      </div>
    </div>
  );
}
