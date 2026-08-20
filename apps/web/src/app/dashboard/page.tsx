import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import StatCard from "@/components/dashboard/stat-card";
import RecentActivity from "@/components/dashboard/recent-activity";
import PortfolioOverview from "@/components/dashboard/portfolio-overview";


export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />

            <div className="ml-64 flex min-w-0 flex-1 flex-col">
                <Topbar />

                <main className="flex-1 p-6">
                    {/* Stats */}
                    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            title="Total Projects"
                            value="24"
                            description="Projects in your portfolio"
                            icon="📁"
                            color="blue"
                        />

                        <StatCard
                            title="Active Projects"
                            value="8"
                            description="Currently in progress"
                            icon="⚡"
                            color="orange"
                        />

                        <StatCard
                            title="Completed"
                            value="16"
                            description="Successfully completed"
                            icon="✓"
                            color="green"
                        />

                        <StatCard
                            title="Clients"
                            value="12"
                            description="Total clients"
                            icon="👥"
                            color="purple"
                        />
                    </section>

                    {/* Welcome section */}
                    <div className="mt-6 grid gap-6 xl:grid-cols-2">
                        <PortfolioOverview />
                        <RecentActivity />
                    </div>

                </main>
            </div>
        </div>
    );
}
