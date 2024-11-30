import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

interface ThemeSheetProps {
  open: boolean;
  handleSheet: () => void;
}

export function ThemeSheet({ open, handleSheet }: ThemeSheetProps) {
  const { setTheme } = useTheme();

  return (
    <Sheet open={open} onOpenChange={handleSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit theme</SheetTitle>
          <SheetDescription>
            Create your own theme or choose from the available ones.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-4 my-4 gap-4 [&>span]:relative">
          <span
            className="bg-slate-800 rounded-full w-11 h-11"
            onClick={() => setTheme("dark")}
          >
            <PaintBrushIcon className="w-6 h-6 absolute left-[25%] top-[25%]" />
          </span>
          <span
            className="bg-slate-100 rounded-full border-2 border-black w-11 h-11"
            onClick={() => setTheme("light")}
          >
            <PaintBrushIcon className="w-6 h-6 absolute left-[25%] top-[25%] text-black" />
          </span>
          <span
            className="bg-blue-500 border-2 border-black rounded-full w-11 h-11"
            onClick={() => setTheme("blue")}
          ></span>
          <span className="bg-lime-500 border-2 border-black rounded-full w-11 h-11"></span>
          <span className="bg-yellow-500 border-2 border-black rounded-full w-11 h-11"></span>
          <span className="bg-rose-500 border-2 border-black rounded-full w-11 h-11"></span>
          <span className="bg-orange-400 border-2 border-black rounded-full w-11 h-11"></span>
          <span className="bg-purple-500 border-2 border-black rounded-full w-11 h-11"></span>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-accent">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
