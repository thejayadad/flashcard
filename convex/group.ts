import {v} from "convex/values"
import {mutation, query} from "./_generated/server"
import {Doc, Id} from "./_generated/dataModel"

export const createGroup = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const { db } = ctx; // Extract `db` explicitly
    
        // Insert group with timestamp
        const groupId = await db.insert("groups", {
          title: args.title,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
    
        return groupId; // Return the newly created book ID
      },
})

export const getGroups = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("groups").collect();
  },
});

export const getGroupById = query({
    args: { id: v.id("groups") }, // Require a valid group ID
    handler: async (ctx, { id }) => {
      const group = await ctx.db.get(id); // Fetch book by ID
      if (!group) {
        throw new Error("Group not found");
      }
      return group;
    },
})

export const updateGroup = mutation({
  args: { id: v.id("groups"), title: v.string() },
  handler: async (ctx, { id, title }) => {
    await ctx.db.patch(id, { title });
  },
});

export const deleteGroup = mutation({
  args: { id: v.id("groups") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});