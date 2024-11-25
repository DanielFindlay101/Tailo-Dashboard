"use client";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
  CircleStackIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";

export default function WelcomePanel() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-secondary p-4 rounded-lg ${
        open ? "ring-2 ring-accent" : ""
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">What&apos;s new in Tailo 🚀</h3>
        {open ? (
          <ChevronUpIcon
            className="h-6 w-6 text-foreground"
            onClick={() => setOpen(false)}
          />
        ) : (
          <ChevronDownIcon
            className="h-6 w-6 text-foreground"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      {open && (
        <>
          <span className="w-full mb-4">
            <p className="text-center text-lg text-foreground">
              Tailo 2.0 released! Check out what's new!
            </p>
          </span>
          <div className="mt-2 flex justify-evenly">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-accent " />
              <p className="text-sm text-foreground">
                Introducing new AI features!
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CircleStackIcon className="w-6 h-6 text-accent" />
              <p className="text-sm text-foreground">
                Backend stability (finally...)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PencilSquareIcon className="w-6 h-6 text-accent" />
              <p className="text-sm text-foreground">
                Note taking abilities are here!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
