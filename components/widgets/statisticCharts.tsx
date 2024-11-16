import React from "react";
import { AreaChartComponent } from "../charts/area-charts";
import { BarChartComponent } from "../charts/bar-charts";
import { PieChartComponent } from "../charts/pie-charts";

export default function StatisticCharts() {
  return (
    <div className="flex justify-evenly">
      <AreaChartComponent />
      <BarChartComponent />
      <PieChartComponent />
    </div>
  );
}
