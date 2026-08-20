import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import PortfolioHeader from "@/components/portfolio/portfolio-header";
import ProjectGrid from "@/components/portfolio/project-grid";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="ml-64 flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          <PortfolioHeader />

          <section className="mt-6">
            <ProjectGrid />
          </section>
        </main>
      </div>
    </div>
  );
}
