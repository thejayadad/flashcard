import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Groups table: Each group contains multiple flashcards
  groups: defineTable({
    title: v.string(), // Group title
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  // Flashcards table: Belongs to a specific group
  flashcards: defineTable({
    groupId: v.id("groups"), // Foreign key to the group
    question: v.string(),
    answer: v.string(),
    learned: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});
