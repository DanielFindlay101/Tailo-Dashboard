"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

const chartData = [
  { month: "Monday", desktop: 186, mobile: 80 },
  { month: "Tuesday", desktop: 305, mobile: 200 },
  { month: "Wednesday", desktop: 237, mobile: 120 },
  { month: "Thursday", desktop: 73, mobile: 190 },
  { month: "Friday", desktop: 209, mobile: 130 },
  { month: "Saturday", desktop: 214, mobile: 140 },
  { month: "Sunday", desktop: 150, mobile: 100 },
];

const chartConfig = {
  desktop: {
    label: "PDF",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Tailo",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AreaChartComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Your reading summary</CardTitle>
        <CardDescription>
          Showing hours saved reading by using Tailo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              You've saved 5 hours reading. <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Week beginning 12th July
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
