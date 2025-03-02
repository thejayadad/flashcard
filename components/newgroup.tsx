'use client'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import {FiPlus} from "react-icons/fi"
import { toast } from 'sonner'


const NewGroupBtn = () => {
    const createGroup = useMutation(api.group.createGroup)
    const router = useRouter(); // Initialize router for navigation

    const onCreate = async () => {
        const promise = createGroup({ title: "Untitled" })
          .then((groupId) => {
            toast.success("New Group Created!");
            router.push(`/${groupId}`); // Redirect to group page
          })
          .catch(() => {
            toast.error("Failed to create the group.");
          });
    
        toast.promise(promise, {
          loading: "Creating a group...",
          success: "New Group created!",
          error: "Failed to create the group.",
        });
      };
  return (
    <button 
    onClick={onCreate}
    className="bg-white flex items-center justify-center font-bold py-2 lg:py-4 px-6 lg:px-12 rounded-xl text-xl hover:bg-white/80 text-[#3098C6]">
    <FiPlus className="h-6 w-6 lg:mr-4 font-bold text-yellow-500" />
    <span className='hidden lg:block'>New Group</span>
  </button>
  )
}

export default NewGroupBtn