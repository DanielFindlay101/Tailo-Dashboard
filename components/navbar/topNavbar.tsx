"use client";
import { useState } from "react";
import {
  AdjustmentsVerticalIcon,
  ChatBubbleBottomCenterTextIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";
import { Input } from "../ui/input";
import { ThemeSheet } from "../sheets/themeSheet";
export default function TopNavbar() {
  const [themeSheet, openThemeSheet] = useState(false);
  const toggleThemeSheet = () => {
    openThemeSheet(!themeSheet);
  };
  return (
    <div
      className="w-screen sticky top-0 z-50 bg-background h-12 p-4
       *:text-foreground hover:*:text-foreground-hover hover:*:cursor-pointer
     border-slate-700 border-b-2 flex items-center justify-between gap-2"
    >
      <BuildingStorefrontIcon className="h-8 w-8" />
      <div className="flex gap-2 items-center">
        <div className="relative">
          <Input className="" placeholder="Search Tailo" />
          <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-[0.45rem]" />
        </div>
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
        <PaintBrushIcon
          className="h-6 w-6 hover:cursor-pointer"
          onClick={() => openThemeSheet(!themeSheet)}
        />
        <AdjustmentsVerticalIcon className="h-6 w-6" />
      </div>
      <ThemeSheet open={themeSheet} handleSheet={toggleThemeSheet} />
    </div>
  );
}
