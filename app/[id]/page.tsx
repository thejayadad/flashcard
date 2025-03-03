"use client";

import { useState } from "react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import SiteBtn from "@/components/site-btn";
import Flashcard from "@/components/flashcard";

const GroupPage = () => {
  const params = useParams();
  const groupId = params?.id as string;
  const documentId = groupId as Id<"groups"> | undefined;
  const group = useQuery(api.group.getGroupById, documentId ? { id: documentId } : "skip");

  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { id: 2, question: "What is Convex?", answer: "A backend framework for real-time data storage." },
  ]);

  const handleClick = () => {
    const newCard = {
      id: Date.now(),
      question: "New Question",
      answer: "New Answer",
    };
    setFlashcards([...flashcards, newCard]);
  };

  if (group === undefined) {
    return <div className="text-center text-gray-500 mt-10">Loading group...</div>;
  }

  if (!group) {
    return <div className="text-center text-red-500 mt-10">Group not found.</div>;
  }

  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="py-8 flex items-center mx-auto max-w-screen-2xl justify-between px-4">
          <FiArrowLeft className="h-6 w-6" />
          <SiteBtn
            label="New FlashCard"
            textColor="text-white"
            icon={<FiPlus className="h-6 w-6" />}
            bg="bg-neutral-200"
            iconColor="text-yellow-500"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="h-full">
        <div className="flex items-center justify-center h-[85vh]">
          <div className="mx-auto max-w-screen-md h-full w-full rounded-xl p-12">
            <div className="bg-white h-full rounded-xl border">
              FlashCa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
