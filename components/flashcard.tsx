"use client";

import { useState } from "react";
import { FiEdit, FiTrash, FiRotateCcw } from "react-icons/fi";

interface FlashcardProps {
  question: string;
  answer: string;
  onDelete?: () => void;
  onEdit?: (newAnswer: string) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, onDelete, onEdit }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState(answer);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsEditing(false); // Close editing mode when flipping
  };

  const handleSaveEdit = () => {
    if (onEdit) {
      onEdit(editedAnswer);
    }
    setIsEditing(false);
  };

  return (
    <div className="perspective w-80 h-52">
      <div
        className={`relative w-full h-full transform transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side (Question) */}
        <div className="absolute w-full h-full bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-lg font-semibold">Question</span>
            <div className="flex gap-2">
              <FiEdit className="h-5 w-5 text-gray-500 cursor-pointer" />
              <FiTrash
                className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={onDelete}
              />
            </div>
          </div>
          {/* Body (Question Text) */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-center text-lg font-medium">{question}</p>
          </div>
          {/* Footer (Flip Button) */}
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold"
            onClick={handleFlip}
          >
            Flip
          </button>
        </div>

        {/* Back Side (Answer) */}
        <div className="absolute w-full h-full bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between rotate-y-180 backface-hidden">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-lg font-semibold">Answer</span>
            <div className="flex gap-2">
              <FiEdit
                className="h-5 w-5 text-blue-500 cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
              <FiTrash
                className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={onDelete}
              />
            </div>
          </div>
          {/* Body (Answer Text or Edit Input) */}
          <div className="flex-1 flex items-center justify-center">
            {isEditing ? (
              <input
                type="text"
                value={editedAnswer}
                onChange={(e) => setEditedAnswer(e.target.value)}
                className="border p-2 w-full text-center rounded-md"
              />
            ) : (
              <p className="text-center text-lg font-medium">{editedAnswer}</p>
            )}
          </div>
          {/* Footer (Save/Edit Mode & Flip Button) */}
          {isEditing ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold"
              onClick={handleFlip}
            >
              Flip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
