import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectListCard from "./projectListCard";

const projects = [
  {
    title: "Intro to Electronics",
    status: "In progress",
    date: new Date().toLocaleDateString("en-US"),
  },
  {
    title: "Computer Architecture",
    status: "Completed",
    date: new Date().toLocaleDateString("en-US"),
  },
  {
    title: "Data Structures",
    status: "Not yet started",
    date: new Date().toLocaleDateString("en-US"),
  },
];

export default function ProjectList() {
  return (
    <Card className="h-full ">
      <CardHeader>
        <CardTitle className="font-semibold">Your Projects</CardTitle>
        <CardDescription>View, edit or create a new project.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectListCard
              key={index}
              title={project.title}
              status={project.status}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}
