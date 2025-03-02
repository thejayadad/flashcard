'use client'
import GroupCard from "@/components/group-card";
import NewGroupBtn from "@/components/newgroup";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";


export default function Home() {
  const groups = useQuery(api.group.getGroups) ?? []
  return (
    <div className="w-full h-full bg-[#3098C6]">
      <div className="flex flex-col h-full mx-auto max-w-screen-xl w-full">
        <div className="flex py-6 px-4 items-center w-full justify-between">
          <h2 className="text-2xl text-white font-bold leading-3">My Classes</h2>
      <NewGroupBtn
      />
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 px-4">
          {groups.length > 0 ? (
            groups.map((group) => <GroupCard key={group._id} group={group} />)
          ) : (
            <div className="col-span-full text-center text-gray-500 mt-6">
              No groups found. Try creating one!
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
