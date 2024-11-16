"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function WelcomePanel() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-slate-900 p-4 rounded-lg ${
        open ? "ring-2 ring-green-500" : ""
      }`}
    >
      <div className="flex justify-between">
        <p className="text-base font-semibold">What&apos;s new in Tailo 🚀</p>
        {open ? (
          <ChevronUpIcon
            className="h-6 w-6 text-slate-100"
            onClick={() => setOpen(false)}
          />
        ) : (
          <ChevronDownIcon
            className="h-6 w-6 text-slate-100"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      {open && (
        <div className="mt-2 flex justify-evenly">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 ring-2 ring-green-500 h-8 w-8 rounded-md"></div>
            <p className="text-sm">Tailo v1.0.0 released</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 ring-2 ring-green-500 h-8 w-8 rounded-md"></div>
            <p className="text-sm">Tailo v1.0.1 released</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 ring-2 ring-green-500 h-8 w-8 rounded-md"></div>
            <p className="text-sm">Tailo v1.0.2 released</p>
          </div>
        </div>
      )}
    </div>
  );
}
