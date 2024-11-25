"use client";
import { useState } from "react";

interface InsightsModalProps {
  open: boolean;
  handleModal: () => void;
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InsightsModal({ open, handleModal }: InsightsModalProps) {
  const [selectedChart, setSelectedChart] = useState("");

  return (
    <Dialog open={open} onOpenChange={handleModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an insight</DialogTitle>
          <DialogDescription>
            Choose a graph type and a data source to create a new insight.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Select onValueChange={setSelectedChart}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a chart type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Charts</SelectLabel>
                <SelectItem value="bar-chart">Bar Chart</SelectItem>
                <SelectItem value="pie-chart">Pie Chart</SelectItem>
                <SelectItem value="area-chart">Area Chart</SelectItem>
                <SelectItem value="line-chart">Line Chart</SelectItem>
                <SelectItem value="radar-chart">Radar Chart</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {selectedChart && (
          <div className="text-sm text-muted-foreground">
            You selected: {selectedChart}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
