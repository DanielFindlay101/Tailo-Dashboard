import {
  DocumentTextIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

interface DocumentCardProps {
  title: string;
  status: string;
}

export default function DocumentCard({ title, status }: DocumentCardProps) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");
  return (
    <div className="w-full flex gap-4 p-4 items-center bg-tertiary hover:bg-tertiary-hover hover:cursor-pointer rounded-md">
      <DocumentTextIcon className="h-8 w-8 text-foreground" />
      <p className="grow">{title}</p>
      <div className="flex gap-2 items-center rounded-full px-2 bg-green-500">
        <CheckCircleIcon className="h-4 w-4 text-slate-50" />
        <p className="text-slate-200">{status}</p>
      </div>
      <p>{formattedDate}</p>
      <EllipsisVerticalIcon className="h-6 w-6" />
    </div>
  );
}
