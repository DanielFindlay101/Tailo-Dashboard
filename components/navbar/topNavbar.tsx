import {
  AdjustmentsVerticalIcon,
  ChatBubbleBottomCenterTextIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";
import { Input } from "../ui/input";
export default function TopNavbar() {
  return (
    <div className="w-screen sticky top-0 z-50 bg-slate-950 h-12 p-4 border-slate-700 border-b-2 flex items-center justify-between gap-2">
      <BuildingStorefrontIcon className="h-8 w-8 text-slate-100" />
      <div className="flex gap-2 items-center">
        <div className="relative">
          <Input className="" placeholder="Search Tailo" />
          <MagnifyingGlassIcon className="h-6 w-6 text-slate-100 absolute right-3 top-[0.45rem]" />
        </div>
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-slate-100" />
        <PaintBrushIcon className="h-6 w-6 text-slate-100" />
        <AdjustmentsVerticalIcon className="h-6 w-6 text-slate-100" />
      </div>
    </div>
  );
}
