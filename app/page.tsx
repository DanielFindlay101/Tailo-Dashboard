"use client";
import { ProjectCard } from "@/components/cards/project-card";
import { useState } from "react";
import DocumentList from "@/components/documents/documentList";
import WelcomePanel from "@/components/panels/welcomePanel";
import StatisticCharts from "@/components/widgets/statisticCharts";
import ProjectList from "@/components/projects/projectList";
import { Button } from "@/components/ui/button";
import { ChartPieIcon } from "@heroicons/react/20/solid";
import { InsightsModal } from "@/components/modals/insightsModal";

export default function Home() {
  const [openInsightsModal, setOpenInsightsModal] = useState(false);

  const toggleInsightsModal = () => {
    setOpenInsightsModal(!openInsightsModal);
  };
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] p-2 bg-background">
      <div className="p-4 space-y-4">
        <h1 className=" font-semibold text-xl">Welcome, Daniel</h1>
        <WelcomePanel />
      </div>
      <div className="grid grid-cols-4 gap-4 p-2">
        <div className="col-span-3 col-start-1 bg-secondary rounded-md p-2">
          <div className="flex justify-between mb-3">
            <h3 className="ml-4 text-lg font-semibold">Your insights</h3>
            <Button onClick={toggleInsightsModal} className="bg-accent">
              <ChartPieIcon className="w-6 h-6 font-semibold" />
              Add a new insight
            </Button>
          </div>
          <StatisticCharts />
        </div>
        <div className="cols-start-3 col-span-1 bg-secondary rounded-md p-2">
          <ProjectCard />
        </div>
        <div className="col-span-1 col-start-1 bg-secondary rounded-md p-2">
          <ProjectList />
        </div>
        <div className="cols-start-2 col-span-3 bg-secondary rounded-md p-2">
          <DocumentList />
        </div>
      </div>
      <InsightsModal
        open={openInsightsModal}
        handleModal={toggleInsightsModal}
      />
    </div>
  );
}
