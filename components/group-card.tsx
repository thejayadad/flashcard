"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {FiMoreHorizontal} from "react-icons/fi"
import { Id } from "@/convex/_generated/dataModel";

interface GroupCardProps {
  group: { _id: string; title: string };
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(group.title);
  const [showOptions, setShowOptions] = useState(false);

  const updateGroup = useMutation(api.group.updateGroup);
  const deleteGroup = useMutation(api.group.deleteGroup);

  const handleSave = async () => {
    if (newTitle.trim() === "") return;
    await updateGroup({ id: group._id as Id<"groups">, title: newTitle }); // ✅ Cast _id
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteGroup({ id: group._id as Id<"groups"> }); // ✅ Cast _id
  };

  return (
    <div className="relative flex items-center justify-between py-4 px-6 bg-white rounded-lg shadow-md">
      {/* Group Name / Editable Input */}
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-1 rounded-md w-full"
        />
      ) : (
        <span className="text-md lg:text-lg font-semibold">{group.title}</span>
      )}

      {/* More Options Icon */}
      <div className="relative">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="p-2 rounded-md hover:bg-gray-200"
        >
          <FiMoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>

        {/* Options Menu */}
        {showOptions && (
          <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md">
            {!isEditing ? (
              <>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsEditing(true);
                    setShowOptions(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </>
            ) : null}
          </div>
        )}
      </div>

      {/* Save / Cancel Buttons for Editing Mode */}
      {isEditing && (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-black px-3 py-1 rounded-md"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupCard;
