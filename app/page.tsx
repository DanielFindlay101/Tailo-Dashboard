import { ProjectCard } from "@/components/cards/project-card";
import DocumentList from "@/components/documents/documentList";
import WelcomePanel from "@/components/panels/welcomePanel";
import StatisticCharts from "@/components/widgets/statisticCharts";
import ProjectList from "@/components/projects/projectList";

export default function Home() {
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] p-2 bg-slate-950">
      <div className="p-4 space-y-4">
        <h1 className=" font-semibold text-xl">Welcome, Daniel</h1>
        <WelcomePanel />
      </div>
      <div className="grid grid-cols-4 gap-4 p-2">
        <div className="col-span-3 col-start-1 bg-slate-900 rounded-md p-2">
          <StatisticCharts />
        </div>
        <div className="cols-start-3 col-span-1 bg-slate-900 rounded-md p-2">
          <ProjectCard />
        </div>
        <div className="col-span-1 col-start-1 bg-slate-900 rounded-md p-2">
          <ProjectList />
        </div>
        <div className="cols-start-2 col-span-3 bg-slate-900 rounded-md p-2">
          <DocumentList />
        </div>
      </div>
    </div>
  );
}
