"use client";

import { useState } from "react";

export default function Topbar() {
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back. Here&apos;s your portfolio overview.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotifications((value) => !value)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50"
            aria-label="Notifications"
          >
            🔔

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {notifications && (
            <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold text-slate-900">
                Notifications
              </p>

              <p className="mt-2 text-sm text-slate-500">
                No new notifications.
              </p>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            A
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Admin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
