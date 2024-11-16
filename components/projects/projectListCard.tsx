import {
  ArrowPathIcon,
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";

interface ProjectListCardProps {
  title: string;
  status: string;
}

export default function ProjectListCard({
  title,
  status,
}: ProjectListCardProps) {
  let pillStyle = "";
  let statusIcon = null;

  switch (status) {
    case "In progress":
      pillStyle = "bg-blue-600";
      statusIcon = <ArrowPathIcon className="h-4 w-4 text-slate-50" />;
      break;
    case "Completed":
      pillStyle = "bg-green-500";
      statusIcon = <CheckCircleIcon className="h-4 w-4 text-slate-50" />;
      break;
    case "Not yet started":
      pillStyle = "bg-yellow-600";
      statusIcon = (
        <EllipsisHorizontalCircleIcon className="h-4 w-4 text-slate-50" />
      );
      break;
    default:
      pillStyle = "bg-blue-600";
      break;
  }

  return (
    <div className="bg-slate-800 flex flex-col gap-3 rounded-lg p-2 hover:bg-slate-700 hover:cursor-pointer">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <EllipsisVerticalIcon className="h-6 w-6 text-slate-100" />
      </div>
      <div
        className={`flex gap-2 rounded-full px-2 items-center justify-center ${pillStyle}`}
      >
        {statusIcon}
        <p>{status}</p>
      </div>
    </div>
  );
}
