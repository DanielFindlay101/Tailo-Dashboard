"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import DocumentCard from "./documentCard";
import { DocumentPlusIcon } from "@heroicons/react/20/solid";
import { BaseModal } from "../modals/baseModal";

const documents = [
  {
    title: "A Series of Unfortunate Events",
    status: "Ready to read",
    date: new Date().toLocaleDateString("en-US"),
  },
  {
    title: "Whinnie The Pooh",
    status: "Ready to read",
    date: new Date().toLocaleDateString("en-US"),
  },
  {
    title: "The Lion, The Witch and The Wardrobe",
    status: "Ready to read",
    date: new Date().toLocaleDateString("en-US"),
  },
  {
    title: "The Hobbit",
    status: "Ready to read",
    date: new Date().toLocaleDateString("en-US"),
  },
];

export default function DocumentList() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="p-2 flex flex-col gap-4 ">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Your Documents</h3>
        <Button className="bg-slate-100" onClick={handleModal}>
          <DocumentPlusIcon className="w-6 h-6" />
          Upload new document
        </Button>
      </div>
      {documents.map((document, index) => (
        <DocumentCard
          key={index}
          title={document.title}
          status={document.status}
        />
      ))}
      <BaseModal open={openModal} handleModal={handleModal} />
    </div>
  );
}
